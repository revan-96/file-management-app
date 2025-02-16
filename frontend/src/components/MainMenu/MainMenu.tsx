import { StyledMainMenu, StyledMainMenuIcon, StyledMainMenuItem, StyledMainMenuList, StyledMainMenuProfileIcon } from "./MainMenu.styles";
import icon from '../../assets/icons/user.svg';

function MainMenu() {
    return <StyledMainMenu>
        <StyledMainMenuIcon></StyledMainMenuIcon>
        <StyledMainMenuList role="list">
            <StyledMainMenuItem></StyledMainMenuItem>
            <StyledMainMenuItem></StyledMainMenuItem>
            <StyledMainMenuItem></StyledMainMenuItem>
            <StyledMainMenuItem></StyledMainMenuItem>
            <StyledMainMenuItem></StyledMainMenuItem>
            <StyledMainMenuItem></StyledMainMenuItem>
            <StyledMainMenuItem></StyledMainMenuItem>
        </StyledMainMenuList>
        <StyledMainMenuProfileIcon>
            <img src={icon} alt="Profile Icon" width="22" height="22"/>
        </StyledMainMenuProfileIcon>
    </StyledMainMenu>
}

export default MainMenu;