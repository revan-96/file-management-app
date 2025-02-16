export interface Folder {
    _id: string;
    name?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    parentId?: string;
    subfolders?: Folder[];
    files?:  File[];
    depth?: number;
    expanded?: boolean;
}

export interface File {
    _id: string;
    name: string;
    description?: string;
    folderId?: string;
    depth?: number;
}