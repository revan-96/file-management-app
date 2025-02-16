import styled from "styled-components";
import { colors, hexToHexWithAlpha } from "../../global/colors";
import { breakpoints } from "../../global/breakpoints";

export const StyledMainMenu = styled('div')`
    background-color: ${colors.indigo};
    width: 80px;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    @media screen and (max-width: ${breakpoints.mobileSmall - 1}px) {
        display: none;
    }
`;

export const StyledMainMenuIcon = styled('div')`
    background-color: ${colors.grey};
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin: 13px 15px 0;
`;

export const StyledMainMenuList = styled('ul')`
    margin: 44px 20px 0;
    display: flex;
    flex-direction: column;
    gap: 11px;
    padding: 0;
`;

export const StyledMainMenuItem = styled('li')`
    background-color: ${hexToHexWithAlpha(colors.grey, 20)};
    border-radius: 10px;
    width: 40px;
    height: 40px;
`;

export const StyledMainMenuProfileIcon = styled('div')`
    margin: auto 15px 25px;
    background-color: ${hexToHexWithAlpha(colors.grey, 20)};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    img {
        margin: 14px;
    }
`