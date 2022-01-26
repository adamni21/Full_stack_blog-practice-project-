import {
  ChangeEvent,
  FC,
  FormEvent,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

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
import { gql, useQuery } from "@apollo/client";
import { Authors } from "src/operation-result-types";

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

const AUTHORS_QUERY = gql`
  query Authors {
    authors {
      id
      first_name
      last_name
    }
  }
`;

const initial: article = { title: "", content: "", authorId: "" };

const NewArticle: FC = () => {
  const { data, error } = useQuery<Authors>(AUTHORS_QUERY);
  // Form input fields state
  const [state, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    if (data && data.authors.length > 0)
      dispatch({
        type: "UPDATE",
        payload: { fieldName: "authorId", value: data.authors[0].id },
      });
  }, [data]);

  const AuthorInput = useRef(<StyledInput as="div">Loading...</StyledInput>);
  const currentAuthor = data?.authors.find(
    (author) => author.id === state.authorId
  );

  const authorName = currentAuthor
    ? `${currentAuthor.first_name} ${currentAuthor.last_name}`
    : "No author chosen yet!";

  // Form input fields changes
  const changeHandler = ({
    target: { name, value },
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    dispatch({
      type: "UPDATE",
      payload: { fieldName: name, value: value },
    });
  };

  // Form input fields reset
  const formResetHandler = () => dispatch({ type: "RESET" });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    openConfirmModal();
  };

  // Responsible for opening/closing ArticlePreview and ConfirmModal
  const [portalState, setPortalState] = useState<PORTAL_STATE>("CLOSED");
  const closePortalHandler = () => setPortalState("CLOSED");
  const openPreviewHandler = () => setPortalState("ARTICLE_PREVIEW");
  const openConfirmModal = () => setPortalState("CONFIRM_UPLOAD");

  if (error) return <h2>Something went wrong</h2>;
  if (data)
    AuthorInput.current = (
      <StyledInput
        name="authorId"
        as="select"
        value={state.authorId}
        onChange={changeHandler}
      >
        {data.authors.map(({ id, first_name, last_name }) => (
          <option key={id} value={id}>{`${first_name} ${last_name}`}</option>
        ))}
      </StyledInput>
    );

  if (portalState === "ARTICLE_PREVIEW")
    return (
      <NewArticlePreview
        onClosePreview={closePortalHandler}
        title={state.title}
        content={state.content}
        authorName={authorName}
      />
    );

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
        {AuthorInput.current}
        <StyledLabel>Content:</StyledLabel>
        <StyledTextarea
          name="content"
          value={state.content}
          onChange={changeHandler}
        />
        <StyledButton type="submit">Add Article</StyledButton>
        <StyledButton onClick={openPreviewHandler}>Show Preview</StyledButton>
      </form>
      {portalState === "CONFIRM_UPLOAD" && (
        <ConfirmModal
          articleData={state}
          onCloseModal={closePortalHandler}
          onSuccess={formResetHandler}
        />
      )}
    </StyledMain>
  );
};

export default NewArticle;
