import { Counter, CounterItem, LeftSectionMenu, StyledLeftSection, StyledTitle, TrayHandle } from "./LeftSection.styles";
import trayicon from '../../assets/icons/arrow.svg';
import foldericon from '../../assets/icons/folder.svg';
import fileicon from '../../assets/icons/file.svg';
import FolderTree from "../FolderTree/FolderTree";
import MainMenu from "../MainMenu/MainMenu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FolderState } from "../../state/folders.reducer";

function LeftSection() {
    const [expanded, setExpanded] = useState(true);
    const rootFolder = useSelector(
      (state: {folders: FolderState}) => state.folders.root
    );
    
    return <StyledLeftSection className={expanded ? 'expanded': ''}>
        <MainMenu></MainMenu>
        <LeftSectionMenu>
            <StyledTitle>Folders & Documents</StyledTitle>
            <TrayHandle className="trayhandle" type="button" onClick={() => setExpanded(!expanded)}>
                <img src={trayicon} alt="Collapse Tray" width="7.13" height="12.6"></img>
            </TrayHandle>
            <Counter>
                <CounterItem>
                    <img tabIndex={-1} src={foldericon} alt="Folder Icon" width="32" height="27.79"></img>
                    <span className="title">Folders</span>
                    <span className="count">200+</span>
                </CounterItem>
                <CounterItem>
                    <img tabIndex={-1} src={fileicon} alt="File Icon" width="25.06" height="32.48"></img>
                    <span className="title">Documents</span>
                    <span className="count">200+</span>
                </CounterItem>
            </Counter>
            <FolderTree folders={rootFolder?.subfolders ?? []}></FolderTree>
        </LeftSectionMenu>
    </StyledLeftSection>
}

export default LeftSection;