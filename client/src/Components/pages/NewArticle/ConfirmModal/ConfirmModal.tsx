import { FC, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { article } from "../NewArticle.types";

import { StyledModal } from "./ConfirmModal.styles";
import Portal from "src/Components/UI/Portal";
import ConfirmFrame from "./ConfirmFrame";
import ErrorFrame from "./ErrorFrame";
import SuccessFrame from "./SuccessFrame";
import LoadingFrame from "./LoadingFrame";
import { AddArticle, AddArticleVariables } from "src/operation-result-types";

interface Props {
  articleData: article;
  // onSuccess: () => {};
  onCloseModal: () => void;
  onSuccess: () => void;
}

type Frame = "SUCCESS" | "LOADING" | "CONFIRM" | "ERROR";

const POST_ARTICLE = gql`
  mutation AddArticle($authorId: ID!, $content: String!, $title: String!) {
    addArticle(author_id: $authorId, content: $content, title: $title) {
      id
      title
      author {
        first_name
        last_name
      }
    }
  }
`;

const ConfirmModal: FC<Props> = ({ articleData, onCloseModal, onSuccess }) => {
  const frame = useRef<Frame>("CONFIRM");

  const [addArticle, { loading, error, data }] = useMutation<AddArticle, AddArticleVariables>(POST_ARTICLE);
  if (loading) frame.current = "LOADING";
  if (error) frame.current = "ERROR";
  if (data) {
    frame.current = "SUCCESS";
    onSuccess();
  }

  const mutationHandler = () => {
    addArticle({ variables: articleData }).catch((e) => {
      return null;
    });
  };

  return (
    <Portal backgroundColor="#fffd">
      <StyledModal>
        {frame.current === "CONFIRM" && (
          <ConfirmFrame
            onCloseModal={onCloseModal}
            onConfirm={mutationHandler}
          />
        )}
        {frame.current === "LOADING" && <LoadingFrame />}
        {frame.current === "SUCCESS" && (
          <SuccessFrame previewData={data!.addArticle} onClose={onCloseModal} />
        )}
        {frame.current === "ERROR" && (
          <ErrorFrame
            message={error?.message}
            onTryAgain={mutationHandler}
            onClose={onCloseModal}
          />
        )}
      </StyledModal>
    </Portal>
  );
};

export default ConfirmModal;
