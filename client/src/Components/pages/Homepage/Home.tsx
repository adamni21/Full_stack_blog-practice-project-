import { FC } from "react";
import { blog_entry } from "src/App";
import EntryList from "./ArticlePreviewList";
import { StyledMain } from "./Home.styles";
import Introduction from "./Introduction";

interface Props {
    blogArticles: blog_entry[];
};

const Home: FC<Props> = props => {

    return (
        <StyledMain as="main">
            <Introduction />
            <EntryList articles={props.blogArticles} />
        </StyledMain>
    )
}

export default Home;