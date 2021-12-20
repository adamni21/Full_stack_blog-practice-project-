import { FC } from "react";

import { StyledButton, StyledFlex, StyledMessage } from "./ConfirmModal.styles";

interface Props {
  onCloseModal: () => void;
  onConfirm: () => void;
}

const ConfirmFrame: FC<Props> = ({ onCloseModal, onConfirm }) => {
  return (
    <>
      <StyledMessage>
        Please confirm that you want to upload the article!
      </StyledMessage>
      <StyledFlex>
        <StyledButton onClick={onCloseModal}>Abort</StyledButton>
        <StyledButton onClick={onConfirm}>Confirm</StyledButton>
      </StyledFlex>
    </>
  );
};

export default ConfirmFrame;
