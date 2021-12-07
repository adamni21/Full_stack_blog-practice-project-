import { ChangeEvent, FC, FormEvent, useReducer, useState } from "react";

import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledMain,
  StyledTextarea,
} from "./NewArticle.styles";
import NewArticlePreview from "./NewArticlePreview";

type articleForm = {
  title: string;
  content: string;
  author_name: string;
};

type ACTIONS =
  | { type: "UPDATE"; payload: { fieldName: string; value: string } }
  | { type: "RESET"; };

const reducer = (state: articleForm, action: ACTIONS) => {
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

const initial: articleForm = { title: "", content: "", author_name: "" };

const NewArticle: FC = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const [showPreview, setShowPreview] = useState(false);

  // does'nt need accurate prevState
  const togglePreviewHandler = () => setShowPreview(!showPreview);
  const changeHandler = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: "UPDATE",
      payload: { fieldName: name, value: value },
    });
  };
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "RESET" });
  };

  if (showPreview)
    return <NewArticlePreview onClick={togglePreviewHandler} {...state} />;

  return (
    <StyledMain>
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
        <StyledButton onClick={togglePreviewHandler}>Show Preview</StyledButton>
      </form>
    </StyledMain>
  );
};

export default NewArticle;
