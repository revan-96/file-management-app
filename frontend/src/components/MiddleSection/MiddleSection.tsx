import { Cell, Row, StyledMainSection, StyledMiddleSection } from "./MiddleSection.styles";
import TopSection from "../TopSection/TopSection";
import MiddleSectionFolderTree from "./MiddleSectionFolderTree";
import { useSelector } from "react-redux";
import { FolderState } from "../../state/folders.reducer";

function MiddleSection() {
    const rootFolder = useSelector(
      (state: {folders: FolderState}) => state.folders.root
    );

    return <StyledMiddleSection>
        <TopSection></TopSection>
        <StyledMainSection>
            <Row>
                <Cell>Name</Cell>
                <Cell>Description</Cell>
                <Cell>Created at</Cell>
                <Cell>Updated at</Cell>
            </Row>
            <MiddleSectionFolderTree folders={rootFolder?.subfolders ?? []}></MiddleSectionFolderTree>
        </StyledMainSection>
      </StyledMiddleSection>
}

export default MiddleSection;