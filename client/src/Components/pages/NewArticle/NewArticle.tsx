import { ChangeEvent, FC, FormEvent, useReducer, useState } from "react";

import { REDUCER_ACTIONS, article, PORTAL_STATE } from "./NewArticle.types";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledMain,
  StyledTextarea,
} from "./NewArticle.styles";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import NewArticlePreview from "./NewArticlePreview";

const reducer = (state: article, action: REDUCER_ACTIONS) => {
  switch (action.type) {
    case "UPDATE":
      const { fieldName, value } = action.payload;
      return { ...state, [fieldName]: value };
    case "RESET":
      return initial;
    default:
      return state;
  }
};

const initial: article = { title: "", content: "", author_name: "" };

const NewArticle: FC = () => {
  // Form input fields state
  const [state, dispatch] = useReducer(reducer, initial);
  // Form input fields changes
  const changeHandler = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: "UPDATE",
      payload: { fieldName: name, value: value },
    });
  };

  // Responsible for opening/closing ArticlePreview and ConfirmModal
  const [portalState, setPortalState] = useState<PORTAL_STATE>("CLOSED");
  const closePortalHandler = () => setPortalState("CLOSED");
  const openPreviewHandler = () => setPortalState("ARTICLE_PREVIEW");
  const openConfirmModal = () => setPortalState("CONFIRM_UPLOAD");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    openConfirmModal();
  };

  if (portalState === "ARTICLE_PREVIEW")
    return <NewArticlePreview onClosePreview={closePortalHandler} {...state} />;

  return (
    <StyledMain>
      <ConfirmModal articleData={state} onCloseModal={closePortalHandler} showModal={portalState === "CONFIRM_UPLOAD"}/>
      <form onSubmit={submitHandler}>
        <StyledLabel>Title:</StyledLabel>
        <StyledInput
          name="title"
          type="text"
          value={state.title}
          onChange={changeHandler}
        />
        <StyledLabel className="author">Author:</StyledLabel>
        <StyledInput
          name="author_name"
          type="text"
          value={state.author_name}
          onChange={changeHandler}
        />
        <StyledLabel>Content:</StyledLabel>
        <StyledTextarea
          name="content"
          value={state.content}
          onChange={changeHandler}
        />
        <StyledButton type="submit">Add Article</StyledButton>
        <StyledButton onClick={openPreviewHandler}>Show Preview</StyledButton>
      </form>
    </StyledMain>
  );
};

export default NewArticle;
