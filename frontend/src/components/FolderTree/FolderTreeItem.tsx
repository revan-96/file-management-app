import { StyledFolderTreeItem } from "./FolderTree.styles";
import foldericon from "../../assets/icons/folder.svg";
import Plus from "../../assets/icons/plus.svg?react";
import FolderTree from "./FolderTree";
import { Folder } from "../../types/Folder.types"; 
import { colors, hexToHexWithAlpha } from "../../global/colors";
import { useSelector, useDispatch } from "react-redux";
import { toggle, FolderState } from "../../state/folders.reducer";

function FolderTreeItem(props: { folder: Folder; depth: number }) {
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
      return 30 - depth * 10;
    } else {
      if (expanded) {
        return 30;
      } else {
        return 0;
      }
    }
  }

  return (
    <StyledFolderTreeItem>
      {depth > 0 && <div className="dotted-line-h"></div>}
      <button
        style={{ backgroundColor: hexToHexWithAlpha(colors.grey, getAlpha()) }}
        className={expanded ? "expanded" : ""}
        aria-expanded="false"
        aria-controls="section-1"
        onClick={() => folder?.subfolders?.length && handleToggle()}
      >
        <img
          src={foldericon}
          className="folder"
          alt="Folder Icon"
          width="18"
          height="15"
        ></img>
        {folder?.name}
        <Plus className="expand"></Plus>
      </button>
      {expanded && folder?.subfolders?.length && (
        <FolderTree folders={folder?.subfolders} depth={depth + 1}></FolderTree>
      )}
    </StyledFolderTreeItem>
  );
}

export default FolderTreeItem;
