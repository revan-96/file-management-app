export const folders = [
    {
        _id: '1',
        name: 'Folder',
    },
    {
        _id: '2',
        name: 'Folder',
        subfolders: [
            { 
                _id: '3',
                name: 'Folder',
                parentId: '2',
                subfolders: [
                    { 
                        _id:'6',
                        name: 'Folder',
                        parentId: '3' 
                    },
                    { 
                        _id:'7',
                        name: 'Folder',
                        parentId: '3'  
                    }
                ]
            },
        ]
    },
    {
        _id: '4',
        name: 'Folder',
    },
    {
        _id: '5',
        name: 'Folder',
    }
];