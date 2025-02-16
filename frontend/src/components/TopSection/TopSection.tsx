import Button from "../Button/Button";
import { CreateContextMenu, StyledTopSection } from "./TopSection.styles";
import filtericon from '../../assets/icons/filter.svg';
import plusicon from '../../assets/icons/plus.svg';
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useState } from "react";

function TopSection() {
    const [openContextMenu, setOpenContextMenu] = useState(false);
    return <StyledTopSection>
        <Breadcrumb></Breadcrumb>
        <Button type="button" className="filter">
            <img src={filtericon} alt="Filter Icon" width="21" height="21"></img>
        </Button>
        <Button type="button" className="create" onClick={() => setOpenContextMenu(true)}>
            <img src={plusicon} alt="Create Icon" width="19" height="19"></img>
        </Button>
        <CreateContextMenu isContextMenu={true} isOpen={openContextMenu} onClose={() => setOpenContextMenu(false)}>
            <ul>
                <li>Create Folder</li>
                <li>Create Document</li>
            </ul>
        </CreateContextMenu>
    </StyledTopSection>
}

export default TopSection;