import { FC } from "react";
import { createPortal } from "react-dom";
import { StyledPortal } from "./Portal.styles.";

const Portal: FC<{ backgroundColor?: string, onClick?: () => void }> = ({
  children,
  onClick,
  backgroundColor,
}) => {
  return createPortal(
    <StyledPortal backgroundColor={backgroundColor} onClick={onClick}>
      <div style={{ height: "4rem" }} />
      {children}
    </StyledPortal>,
    document.getElementById("portal")!
  );
};

export default Portal;
