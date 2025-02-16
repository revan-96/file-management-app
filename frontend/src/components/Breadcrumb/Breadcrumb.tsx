import { BreadcrumbItem, BreadcrumbList, StyledBreadcrumb } from "./Breadcrumb.styles";
import BreadcrumbIcon from '../../assets/icons/arrow.svg?react';

function Breadcrumb() {
    return <StyledBreadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>NSM</BreadcrumbItem>
            <BreadcrumbIcon className="arrow"></BreadcrumbIcon>
            <BreadcrumbItem>Folders & Documents</BreadcrumbItem>
        </BreadcrumbList>
    </StyledBreadcrumb>;
}

export default Breadcrumb;