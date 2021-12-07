import { FC } from "react";

import { StyledModal, StyledButton, StyledMessage, StyledFlex } from "./ConfirmModal.styles";
import Portal from "src/Components/UI/Portal";

interface Props {
  onConfirm: () => void;
  onAbort: () => void;
}

const ConfirmModal: FC<Props> = ({ onConfirm, onAbort }) => {
  return (
    <Portal backgroundColor="#fffd">
      <StyledModal onClick={onAbort}>
        <StyledMessage>
          Please confirm that you want to upload the article!
        </StyledMessage>
        <StyledFlex>
            <StyledButton onClick={onAbort}>Abort</StyledButton>
            <StyledButton onClick={onConfirm}>Confirm</StyledButton>
        </StyledFlex>
      </StyledModal>
    </Portal>
  );
};

export default ConfirmModal;
