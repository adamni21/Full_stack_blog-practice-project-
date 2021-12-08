import { FC, Fragment } from "react";

import {
  StyledModal,
  StyledButton,
  StyledMessage,
  StyledFlex,
} from "./ConfirmModal.styles";
import Portal from "src/Components/UI/Portal";
import { article } from "../NewArticle.types";

interface Props {
  articleData: article;
  showModal: boolean;
  onCloseModal: () => void;
}

// const POST_ARTICLE = gql`
//   mutation AddArticle(
//     $authorName: String!
//     $content: String!
//     $title: String!
//   ) {
//     addArticle(author_name: $authorName, content: $content, title: $title) {
//       id
//       title
//       preview
//       author_name
//     }
//   }
// `;

const ConfirmModal: FC<Props> = ({ articleData, showModal, onCloseModal }) => {
  if (!showModal) return <Fragment />;

  return (
    <Portal backgroundColor="#fffd">
      <StyledModal onClick={onCloseModal}>
        <StyledMessage>
          Please confirm that you want to upload the article!
        </StyledMessage>
        <StyledFlex>
          <StyledButton onClick={onCloseModal}>Abort</StyledButton>
          <StyledButton onClick={() => {}}>Confirm</StyledButton>
        </StyledFlex>
      </StyledModal>
    </Portal>
  );
};

export default ConfirmModal;
