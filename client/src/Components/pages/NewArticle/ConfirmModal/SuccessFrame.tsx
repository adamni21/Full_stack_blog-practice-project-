import { FC } from "react";
import { AddArticle_addArticle } from "src/operation-result-types";

import { StyledMessage, StyledButton } from "./ConfirmModal.styles";
// import { StyledArticle, StyledPreview, StyledTitle } from "../../Home/ArticlePreview.styles";

interface Props {
  onClose: () => void;
  previewData: AddArticle_addArticle
}

const Success: FC<Props> = ({ previewData, onClose }) => {
  const { id, title, author: {first_name, last_name} } = previewData;
  return (
    <div>
      <StyledMessage>
        Your article "{title}" by: "{`${first_name} ${last_name}`}", has been successfully uploaded with
        id: "{id}"!
      </StyledMessage>
      <StyledButton onClick={onClose}>Okay</StyledButton>
    </div>
  );
};

export default Success;
