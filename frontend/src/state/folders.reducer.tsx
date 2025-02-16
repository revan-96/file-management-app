import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Folder } from "../types/Folder.types";
import { folders } from "../mockdata/folders";
export interface FolderState {
  root: Folder,
  [key: string]: Folder
}

function flattenFolders(folders: Folder[]) {
  let flatMap: FolderState = {
    root: {
      _id: 'root',
      name: 'root',
      subfolders: folders
    }
  };

  function recurse(folder: Folder) {
    // Add the current folder's id and expanded state to the flat map
    folder.expanded = false;
    flatMap[folder._id] = folder

    // If the folder has subfolders, recurse through them
    if (folder.subfolders && Array.isArray(folder.subfolders)) {
      folder.subfolders.forEach(subfolder => recurse(subfolder));
    }
  }

  // Start recursion for each folder
  folders.forEach(folder => recurse(folder));

  return flatMap;
}

// export function reverseFlattenFolders(flatMap: FolderState) {
//   const folders: FolderState = {};
  
//   // Initialize an empty object to track the folders by their id
//   Object.keys(flatMap).forEach(id => {
//     // Create folder object with id and expanded property
//     folders[id] = { 
//       _id: id, 
//       expanded: flatMap[id].expanded || false, 
//       subfolders: []
//     };
//   });

//   // Now go through and assign subfolders to their parent folders
//   Object.keys(folders).forEach(id => {
//     const folder = folders[id];
    
//     // Look for parent folders and assign the current folder as a subfolder
//     const parentId = id.substring(0, id.lastIndexOf('.')); // Find parent id by removing last part of the current id
//     if (parentId && folders[parentId]) {
//       folders?.[parentId]?.subfolders?.push(folder);
//     }
//   });

//   // Filter out root folders (those without a parent) and return them
//   return Object.values(folders).filter(folder => !folder._id.includes('.'));
// }

const initialState: FolderState = flattenFolders(folders);

console.log(initialState);

export const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Folder>) => {
      state[action.payload._id] = action.payload;
    },
    update: (state, action: PayloadAction<Folder>) => {
      state[action.payload._id] = action.payload;
    },
    remove: (state, action: PayloadAction<{_id: string}>) => {
      delete state[action.payload._id];
    },
    toggle: (state, action: PayloadAction<{_id: string}>) => {
      state[action.payload._id].expanded = !state[action.payload._id].expanded;
    },
    expand: (state, action: PayloadAction<{_id: string}>) => {
      state[action.payload._id].expanded = true;
    },
    collapse: (state, action: PayloadAction<{_id: string}>) => {
      state[action.payload._id].expanded = false;
    },
  },
});

// Export the generated action creators for use in components
export const { toggle, expand, collapse } = folderSlice.actions

// Export the slice reducer for use in the store configuration
export default folderSlice.reducer