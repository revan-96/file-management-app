import styled from "styled-components";
import { colors } from "../../global/colors";
import { fonts, fontWeights } from "../../global/typography";
import { breakpoints } from "../../global/breakpoints";

export const StyledMiddleSection = styled('section')`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    min-width: calc(100% - 400px);
`;

export const StyledMainSection = styled('div')`
    width: 100%;
    height: calc(100vh - 74px);
    overflow-y: auto;
    background-color: ${colors.lightblue};
    padding: 35px 8px 0 13px;
    @media screen and (max-width: ${breakpoints.desktop - 1}px) {
        width: 100%;
        left: 0;
    }
`;

export const StyledFolderTree = styled('ul')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    >li {
    }
    ul {
        gap: 0;
        padding-left: 17px;
        border-top: 1px solid ${colors.darkgrey};
        li {
            border-radius: 0;
            box-shadow: none;
        }
    }
`;

export const StyledFolderTreeItem = styled('li')`
    overflow: hidden;
    background-color: ${colors.white};
    border-radius: 10px;
    box-shadow: 0px 2px 2px 0px #0000000D;
    position: relative;
    &:not(:first-child) {
        border-top: 1px solid ${colors.darkgrey};
    }
    .expand {
        padding: 15px 28px 15px 16px;
        width: 100%;
        display: flex;
        >* {
            display: flex;
            align-items: center;
            &:first-child {
                width: 220px;
                margin: 0 auto;
                margin-right: 12px;
                text-align: center;
                @media screen and (max-width: ${breakpoints.tablet - 1}px) {
                    text-align: left;
                    margin-left: 0;
                }
                font-size: ${fonts.sm.fontSize};
                line-height: ${fonts.sm.lineHeight};
                font-weight: ${fontWeights.normal};
                .expandIcon {
                    margin-right: 14px;
                }
                .folder {
                    margin-right: 24px;
                }
            }
            &:nth-child(2) {
                font-size: ${fonts.sm.fontSize};
                line-height: ${fonts.sm.lineHeight};
                font-weight: ${fontWeights.light};
                flex-basis: 259px;
                margin: 0 auto;                
                margin-right: 17px;
                flex-grow: 1;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                @media screen and (max-width: ${breakpoints.tablet - 1}px) {
                    display: none;
                }
                @media screen and (max-width: ${breakpoints.tabletLarge - 1}px) {
                    flex-basis: 160px;
                }
            }
            &:nth-child(3) {
                font-size: ${fonts.sm.fontSize};
                line-height: ${fonts.sm.lineHeight};
                font-weight: ${fontWeights.light};
                width: 120px;
                margin-right: 33px;
                @media screen and (max-width: ${breakpoints.tablet - 1}px) {
                    display: none;
                }
            }
            &:nth-child(4) {
                font-size: ${fonts.sm.fontSize};
                line-height: ${fonts.sm.lineHeight};
                font-weight: ${fontWeights.light};
                width: 120px;
                margin-right: 31px;
                @media screen and (max-width: ${breakpoints.tablet - 1}px) {
                    display: none;
                }
            }
            &:nth-child(5) {
                line-height: 0;
            }
        }
    }
    .contextMenu {
        position: absolute;
        top: 22px;
        right: 28px;
        width: 35px;
        margin: 0;
    }
    .expanded {
        .expandIcon {
            transform: rotate(90deg);
        }
    }
`;

export const Row = styled('div')`
    display: flex;
    padding: 0 28px 0 16px;
    align-items: center;
    margin-bottom: 12px;
    font-size: ${fonts.sm.fontSize};
    line-height: ${fonts.sm.lineHeight};
    font-weight: ${fontWeights.bold};
    justify-content: space-between;
`;

export const Cell = styled('div')`
    padding: 0;
    flex-shrink: 0;
    &:first-child {
        width: 220px;
        margin: 0 auto;
        margin-left: 74px;
        text-align: left;
        margin-right: 12px;
    }
    &:nth-child(2) {
        flex-basis: 259px;
        margin: 0 auto;
        flex-grow: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        @media screen and (max-width: ${breakpoints.tablet - 1}px) {
            display: none;
        }
        @media screen and (max-width: ${breakpoints.tabletLarge - 1}px) {
            flex-basis: 160px;
        }
    }
    &:nth-child(3) {
        width: 120px;
        margin-right: 33px;
        @media screen and (max-width: ${breakpoints.tablet - 1}px) {
            display: none;
        }
    }
    &:nth-child(4) {
        width: 120px;
        margin-right: 31px;
        @media screen and (max-width: ${breakpoints.tablet - 1}px) {
            display: none;
        }
    }
    &:nth-child(5) {
        line-height: 0;
    }
    .contextMenu {
        width: 35px;
        margin: 0;
    }
`