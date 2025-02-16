import styled from "styled-components";
import { fonts, fontWeights } from "../../global/typography";
import { colors } from "../../global/colors";
import { breakpoints } from "../../global/breakpoints";

export const StyledLeftSection = styled('section')`
    width: 400px;
    height: 100vh;
    top: 0;
    left: 0;
    box-shadow: 1px 1px 2px 0px #0000001A;
    z-index: 2;
    transition: left .5s;
    position: relative;
    flex-shrink: 0;
    @media screen and (max-width: ${breakpoints.desktop - 1}px) {
        position: fixed;
    }
    &:not(.expanded) {
        @media screen and (max-width: ${breakpoints.mobileSmall - 1}px) {
            position: fixed;
            width: 320px;
            left: -320px;
        }
        @media screen and (min-width: ${breakpoints.mobileSmall}px) {
            position: fixed;
            left: -400px;
        }
    }
    &.expanded {
        @media screen and (max-width: ${breakpoints.desktop - 1}px) {
            position: fixed;
        }
        left: 0 !important;
        .trayhandle {
            right: -13.5px;
            transform: rotate(0deg);
        }
    }
`;

export const LeftSectionMenu = styled('div')`
    width: 320px;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    background-color: ${colors.white};
`

export const StyledTitle = styled('h1')`
    margin: 27px 21px 0;
    font-size: ${fonts.lg.fontSize};
    line-height: ${fonts.lg.lineHeight};
    font-weight: ${fontWeights.bold};
`;

export const TrayHandle = styled('button')`
    background-color: ${colors.lightgrey};
    box-shadow: 0px 0px 2px 0px #00000040;
    padding: 0;
    cursor: pointer;
    position: absolute;
    top: 23px;
    right: -30px;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    transform: rotate(180deg);
    img {
        margin: 8px 11.87px 6.4px 8px;
    }
`;

export const Counter = styled('div')`
    margin: 14px 21px 13px;
    display: flex;
    flex-direction: row;

    &>:nth-child(n + 2) {
        position: relative;
        padding-left: 28px;
        &::before {
            content: "";
            display: block;
            width: 2px;
            left: 0;
            top: 6px;
            height: calc(100% - 32px);
            background-color: #DDDDDD;
            position: absolute;
        }
    }
`;

export const CounterItem = styled('div')`
    width: 74px;
    height: 92px;
    display: flex;
    flex-direction: column;
    img {
        margin: 6px auto 0 4px;
    }

    .title {
        font-size: ${fonts.sm.fontSize};
        line-height: ${fonts.sm.lineHeight};
        margin-top: auto;        
    }

    .count {
        font-size: ${fonts.xl.fontSize};
        line-height: ${fonts.xl.lineHeight};
        font-weight: ${fontWeights.bold};
        margin-top: 4px;
    }
`