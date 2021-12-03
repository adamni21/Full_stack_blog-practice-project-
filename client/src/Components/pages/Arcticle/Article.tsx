import { FC } from "react";
import { StyledArticle, StyledAuthor, StyledContent, StyledMain, StyledTitle } from "./Article.styles";


const Article: FC = () => {
    const {title, content, author_name} = {title: "Title", content: "some content", author_name: "Some name"};

  return (
    <StyledMain>
      <StyledArticle>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{content}<br/>{content}</StyledContent>
        <StyledAuthor>written by {author_name}</StyledAuthor>
      </StyledArticle>
    </StyledMain>
  );
};


export default Article;