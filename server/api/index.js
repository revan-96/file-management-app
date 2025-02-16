const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const folderSchema = new Schema({
    name: String,
    description: String,
    parentId: Schema.Types.ObjectId,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const fileSchema = new Schema({
    name: String,
    description: {type: String, default: '---'},
    folderId: Schema.Types.ObjectId,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const directorySchema = new Schema({
    folderId: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    parentId: mongoose.Schema.Types.ObjectId,
    files: [fileSchema],
    subfolders: [folderSchema],
    fileCount: Number,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const Folder = mongoose.model('Folder', folderSchema);
const File = mongoose.model('File', fileSchema);
const Directories = mongoose.model('Directories', directorySchema);

async function updateDirectories() {
    const directoryPipeline = [
        {
            $lookup: {
                from: 'files', 
                localField: '_id', 
                foreignField: 'folderId',
                as: 'files',
            }
        },
        {
            $graphLookup: {
                from: 'folders',
                startWith: '$_id',
                connectFromField: '_id',
                connectToField: 'parentId',
                as: 'subfolders',
                maxDepth: 10,
                depthField: 'depth'
            }
        },
        {
            $addFields: {
                fileCount: { $size: '$files' }, 
            }
        },
        {
            $project: {
                name: 1,
                description: 1,
                parentId: 1,
                files: 1 ,
                subfolders: 1, 
                fileCount: 1,
                createdAt: 1,
                updatedAt: 1
            }
        },
    ];
    const directories = await Folder.aggregate(directoryPipeline);
    await Directories.deleteMany({});
    for (const directory of directories) {
        await Directories.updateOne(
            { _id: directory._id },
            {
                $set: {
                    name: directory.name,
                    description: directory.description,
                    parentId: directory.parentId,
                    files: directory.files,
                    subfolders: directory.subfolders,
                    fileCount: directory.fileCount,
                    createdAt: directory.createdAt,
                    updatedAt: directory.updatedAt,
                },
            },
            { upsert: true }
          );
    }
}


const shutdown = () => {
    console.log('Received termination signal. Shutting down gracefully...');
    
    mongoose.connection.close(true).then(() => {
        console.log('Mongoose connection is disconnected due to application termination');
        process.exit(0);
    });
}

process.on('SIGINT', shutdown);

process.on('SIGTERM', shutdown);

async function main() {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/directories`);
}

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

main().catch(e => console.error(e));

router.get('/', async (req, res, next) => {
    try {
        res.status(200);
        res.send('TEST');
    } catch(e) {
        next(e);
    }
});

router.get('/directories/:folderId?', async (req, res, next) => {
    try {
        if(req.params.folderId) {
            const directories = await Directories.find({ parentId: req.params.folderId });
            res.status(200);
            res.send(directories);
        } else {
            const directories = await Directories.find();
            res.status(200);
            res.send(directories);
        }
    } catch(e) {
        next(e);
    }
});

router.post('/createfolder', async (req, res, next) => {
    try {
        const folder = new Folder(req.body);
        const result = await folder.save();
        await updateDirectories();
        res.status(200);
        res.send(result);
    } catch(e) {
        next(e);
    }
});

router.put('/folder/:id', async (req, res) => {
    try {
        const updatedFolder = await Folder.findByIdAndUpdate(req.params.id, {
            ...req.body,
            updated_at: Date.now()
        }, {
            new: true, 
            runValidators: true, 
        });
        if(!updatedFolder) {
            res.status(404);
            res.send('Folder not found');
        } else {
            await updateDirectories();
            res.status(200);
            res.send(updatedFolder);
        }
    } catch(e) {
        next(e);
    }
});

router.delete('/folder/:id', async (req, res) => {
    try {
        const deletedFolder = await Folder.findByIdAndDelete(req.params.id);
        if(!deletedFolder) {
            res.status(404);
            res.send('Folder not found');
        } else {
            await updateDirectories();
            res.status(200);
            res.send('Folder deleted');
        }
    } catch(e) {
        next(e);
    }
});

var timeStamp;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  
    },
    filename: function (req, file, cb) {
        timeStamp = Date.now();
        cb(null, timeStamp + '-' + file.originalname);
    }
});
  
const upload = multer({ storage: storage });
const uploadDir = path.join(path.resolve(path.dirname(require.main.filename), './'), 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

function progressMiddleware(req, res, next) {
    let progress = 0;
    const fileSize = req.headers["content-length"];
    console.log(fileSize)
    // Set event listener
    req.on("data", (chunk) => {
        console.log(chunk.length)
        progress += chunk.length;
        const percentage = (progress / fileSize) * 100;
        // Other code to handle the progress...
        console.log('progress: ', percentage);
    });

    // Invoke next middleware
    next();
}

router.post('/upload', upload.single('file'), async (req, res, next) => {
    try {
        const file = req.file;
        if(!file) {
            return res.status(400).send('No file uploaded');
        } 
        const fileMetadata = new File({
            name: file.originalname,
            createdAt: timeStamp
        });
        const result = await fileMetadata.save();
        await updateDirectories();
        res.status(200).send(result);
    } catch(e) {
        next(e);
    }
});

router.get('/file/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if(!file) {
            res.status(404);
            res.send('File not found');
        } else {
            const filePath = path.join(uploadDir, new Date(file.createdAt).getTime() + '-' + file.name);
            if (fs.existsSync(filePath)) {
                res.status(200);
                res.download(filePath);
            } else {
              console.error('File not found:', filePath);
            }
        }
    } catch(e) {
        next(e);
    }
});

router.delete('/file/:id', async (req, res) => {
    try {
        const deletedFile = await File.findByIdAndDelete(req.params.id);
        if(!deletedFile) {
            res.status(404);
            res.send('File not found');
        } else {
            await updateDirectories();
            res.status(200);
            res.send('File deleted');
        }
    } catch(e) {
        next(e);
    }
});

module.exports = router;