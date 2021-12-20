import { FC } from "react";

import { StyledMessage, StyledButton } from "./ConfirmModal.styles";
// import { StyledArticle, StyledPreview, StyledTitle } from "../../Home/ArticlePreview.styles";

interface Props {
  onClose: () => void;
  previewData: {
    author_name: string;
    title: string;
    id: string;
  };
}

const Success: FC<Props> = ({ previewData, onClose }) => {
  const { id, title, author_name } = previewData;
  return (
    <div>
      <StyledMessage>
        Your article "{title}" by: "{author_name}", has been successfully uploaded with
        id: "{id}"!
      </StyledMessage>
      <StyledButton onClick={onClose}>Okay</StyledButton>
    </div>
  );
};

export default Success;
