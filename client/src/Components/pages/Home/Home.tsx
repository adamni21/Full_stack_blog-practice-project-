import { FC } from "react";

import { StyledMain } from "./Home.styles";
import ArticleList from "./ArticlePreviewList";
import Introduction from "./Introduction";


const Home: FC = () => {

    return (
        <StyledMain>
            <Introduction />
            <ArticleList />
        </StyledMain>
    )
}

export default Home;