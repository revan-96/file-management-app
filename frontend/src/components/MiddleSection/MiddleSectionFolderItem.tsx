import Button from "../Button/Button";
import { StyledFolderTreeItem } from "./MiddleSection.styles";
import ellipsisicon from '../../assets/icons/ellipsis.svg';
import foldericon from '../../assets/icons/folder.svg';
import chevron from '../../assets/icons/chevron.svg';
import { Folder } from "../../types/Folder.types";
import { useDispatch, useSelector } from "react-redux";
import { FolderState, toggle } from "../../state/folders.reducer";
import { colors, hexToHexWithAlpha } from "../../global/colors";
import MiddleSectionFolderTree from "./MiddleSectionFolderTree";

function MiddleSectionFolderItem(props: { folder: Folder; depth: number }) {
    const { folder, depth } = props;
    const dispatch = useDispatch();
    const expanded = useSelector(
      (state: {folders: FolderState}) => folder?._id ? (state.folders?.[folder?._id]?.expanded ?? false): false
    );
    const handleToggle = () => {
      if (folder?._id) {
        dispatch(toggle(folder));
      }
    };
  
    function getAlpha() {
      if (depth > 0) {
        return 0;
      } else {
        if (expanded) {
          return 30;
        } else {
          return 0;
        }
      }
    }  

    return <StyledFolderTreeItem>
        <button
            style={{ backgroundColor: hexToHexWithAlpha(colors.grey, getAlpha()) }}
            className={"expand" + (expanded ? " expanded" : "")}
            aria-expanded="false"
            aria-controls="section-1"
            onClick={() => folder?.subfolders?.length && handleToggle()}
        >
            <span>
                <img
                    src={chevron}
                    className="expandIcon"
                    alt="Chevron Icon"
                    width="6"
                    height="9"
                ></img>
                <img
                    src={foldericon}
                    className="folder"
                    alt="Folder Icon"
                    width="30"
                    height="30"
                ></img>
                {folder.name}
            </span>
            <span>{folder.description}</span>
            <span>{folder.createdAt}</span>
            <span>{folder.updatedAt}</span>
        </button>
        <Button type="button" className="contextMenu">
            <img src={ellipsisicon} alt="Folder Context Icon" width="3" height="16"></img>
        </Button>
        {expanded && folder?.subfolders?.length && (
            <MiddleSectionFolderTree folders={folder?.subfolders} depth={depth + 1}></MiddleSectionFolderTree>
        )}
    </StyledFolderTreeItem>
}

export default MiddleSectionFolderItem;