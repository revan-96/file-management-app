import styled from "styled-components";
import { colors, hexToHexWithAlpha } from "../../global/colors";
import { fonts, fontWeights } from "../../global/typography";

export const StyledFolderTree = styled('ul')`
    padding: 0 0 0 15px;
    overflow-y: auto;
    border-top: 1px solid ${colors.darkgrey};
    display: flex;
    flex-direction: column;
    position: relative;
    ul {
        padding-left: 11px;
        margin-left: 17px;
        border-top: 0;
    }

    .dotted-line-v {
        position: absolute;
        left: 0;
        width: 1px;
        height: calc(100% - 20px);
        border: .5px dashed ${colors.medgrey};
    }

`;
export const StyledFolderTreeList = styled('ul')`
`
export const StyledFolderTreeItem = styled('li')`
    position: relative;
    button {    
        border-radius: 0;
        border-bottom: 1px solid ${colors.darkgrey};
        background-color: ${colors.white};
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 10px;
        font-size: ${fonts.md.fontSize};
        line-height: ${fonts.md.lineHeight};
        font-weight: ${fontWeights.light};
    }
        
    .folder {
        margin-right: 8px;
    }

    .expand {
        width: 16px;
        height: 16px;
        padding: 3px;
        margin-left: auto;
        margin-right: 0;
        background-color: ${hexToHexWithAlpha(colors.grey, 30)};
        border-radius: 50%;

        path {
            fill: ${colors.black};
        }
    }

    .expanded {
        .expand {
            background-color: ${colors.yellow};
            
            path {
                fill: ${colors.white};
            }            
        }
    }
    .dotted-line-h {
        width: 11px;
        height: 1px;
        border: .5px dashed ${colors.medgrey};
        position: absolute;
        top: 20px;
        left: -11px;
    }
`;