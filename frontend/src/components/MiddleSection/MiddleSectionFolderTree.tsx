import { Folder } from "../../types/Folder.types";
import { StyledFolderTree } from "./MiddleSection.styles";
import MiddleSectionFolderItem from "./MiddleSectionFolderItem";

function MiddleSectionFolderTree(props: {folders: Folder[], depth?: number}) {
    const { folders, depth } = props;
    return <StyledFolderTree>
        {folders?.length && folders.map((folder) => {
            return <MiddleSectionFolderItem key={folder._id} folder={folder} depth={depth ?? 0}></MiddleSectionFolderItem>
        })}
    </StyledFolderTree>
}

export default MiddleSectionFolderTree;