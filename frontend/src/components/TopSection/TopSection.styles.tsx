import styled from "styled-components";
import { colors, hexToHexWithAlpha } from "../../global/colors";
import { breakpoints } from "../../global/breakpoints";
import AccessibleModal from "../Dialog/Dialog";

export const StyledTopSection = styled('div')`
    background-color: ${colors.white};
    height: 74px;
    display: inline-flex;
    align-items: center;
    padding: 0 20px 0 37px;
    width: 100%;
    box-shadow: 1px 1px 2px 0px #0000001A;
    z-index: 1;
    position: relative;
    @media screen and (max-width: ${breakpoints.desktop - 1}px) {
        width: 100%;
    }

    .filter,
    .create {
        border-radius: 10px;  
        height: 35px;
        width: 35px;
        margin: 20px 0 20px auto;
    }
        
    .filter {
        background-color: ${hexToHexWithAlpha(colors.indigo, 80)};
        padding: 7px;
    }

    .create {
        background-color: ${colors.indigo};
        padding: 8px;
        margin-left: 10px;
    }
`;

export const CreateContextMenu = styled(AccessibleModal)`
    background-color: transparent; 
    .modal-content {
      width: auto;
      position: absolute;
      top: 55px;
      right: 20px;
      main {
        padding: 10px;
      }
    }
`