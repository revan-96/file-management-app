import styled from "styled-components";
import { fonts, fontWeights } from "../../global/typography";
import { colors } from "../../global/colors";

export const StyledBreadcrumb = styled('nav')`
    
`;

export const BreadcrumbList = styled('ul')`
    display: flex;
    gap: 8px;
    
    .arrow {
        transform: rotate(180deg);
        path {
            fill: ${colors.grey};
        }
    }
`;

export const BreadcrumbItem = styled('li')`
    font-size: ${fonts.md.fontSize};
    line-height: ${fonts.md.lineHeight};
    font-weight: ${fontWeights.bold};
`;
