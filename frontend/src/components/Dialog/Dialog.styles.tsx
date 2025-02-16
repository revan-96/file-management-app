import styled from "styled-components";
import { fonts, fontWeights } from "../../global/typography";
import { colors } from "../../global/colors";

// Styled components
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center; /* Center the modal horizontally */
  align-items: center; /* Center the modal vertically */
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Box shadow for visual depth */
  max-width: 500px;
  width: 100%; /* Ensure modal fits on small screens */
  position: relative;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out; /* Fade-in effect */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  header {
    padding: 20px;
    border-bottom: 1px solid ${colors.darkgrey};
  }
  main {
    padding: 20px;
  }
  footer {
    padding: 20px;
    border-top: 1px solid ${colors.darkgrey};
    text-align: right;
  }
  #modal-title {
    margin: 0;
    font-size: ${fonts.lg.fontSize};
    line-height: ${fonts.lg.lineHeight};
    font-weight: ${fontWeights.bold};
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  color: ${colors.black};
  border: 1px solid ${colors.darkgrey};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${fonts.lg.fontSize};
  line-height: ${fonts.lg.lineHeight};
  font-weight: ${fontWeights.normal};
`;

export const AcceptButton = styled(CancelButton)`
  color: ${colors.white};
  background-color: ${colors.indigo};
  margin-left: 12px;
`;

export const CloseButton = styled('button')`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 12px;
  right: 20px;
`;