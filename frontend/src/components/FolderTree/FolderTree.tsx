import { Folder } from "../../types/Folder.types";
import { StyledFolderTree } from "./FolderTree.styles";
import FolderTreeItem from "./FolderTreeItem";

function FolderTree(props: {folders: Folder[], depth?: number}) {
    const { folders, depth } = props;
    return <StyledFolderTree>
        {depth && <div className="dotted-line-v"></div>}
        {folders?.length && folders.map((folder) => {
            return <FolderTreeItem key={folder._id} folder={folder} depth={depth ?? 0}></FolderTreeItem>
        })}
    </StyledFolderTree>
}

export default FolderTree;