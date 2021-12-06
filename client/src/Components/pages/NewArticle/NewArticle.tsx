import { ChangeEvent, FC, useReducer } from "react";

import { StyledButton, StyledInput, StyledLabel, StyledMain, StyledTextarea } from "./NewArticle.styles";

type articleForm = {
  title: string;
  content: string;
  author_name: string;
}

type ACTIONS = {type: "UPDATE"; payload: {fieldName: string; value: string}} | {type: "RESET"; payload: {fieldId: string}}

const reducer = (state: articleForm, action: ACTIONS) => {
  switch(action.type) {
    case "UPDATE":
      const { fieldName, value } = action.payload;
      return { ...state, [fieldName]: value }
    default:
      return state;
  }
}

const initial: articleForm = {title: "", content: "", author_name: ""};

const NewArticle: FC = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const changeHandler = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: "UPDATE", 
      payload: {fieldName: name, value: value}
    })
  }
    
  return (
        <StyledMain>
            <form>
                <StyledLabel>Title:</StyledLabel>
                <StyledInput 
                  name="title"
                  type="text"
                  value={state.title}
                  onChange={ changeHandler }
                  />
                <StyledLabel className="author">Author:</StyledLabel>
                <StyledInput 
                  name="author_name"
                  type="text"
                  value={state.author_name}
                  onChange={ changeHandler }
                  />
                <StyledLabel>Content:</StyledLabel>
                <StyledTextarea 
                  name="content"
                  value={state.content}
                  onChange={ changeHandler }
                  />
                <StyledButton type="submit">Add Article</StyledButton>
            </form>
        </StyledMain>
  );
};


export default NewArticle;