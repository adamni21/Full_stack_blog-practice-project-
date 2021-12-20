import { FC } from "react";
import { StyledMessage, StyledButton, StyledFlex } from "./ConfirmModal.styles";

interface Props {
  message: string | undefined;
  onTryAgain: () => void;
  onClose: () => void;
}

const ErrorFrame: FC<Props> = ({ onTryAgain, onClose, message }) => {
  return (
    <>
      <StyledMessage>Sorry, something went wrong!</StyledMessage>
      <StyledMessage>({message})</StyledMessage>
      <StyledFlex>
        <StyledButton onClick={onClose}>Close</StyledButton>
        <StyledButton onClick={onTryAgain}>Try Again</StyledButton>
      </StyledFlex>
    </>
  );
};

export default ErrorFrame;
