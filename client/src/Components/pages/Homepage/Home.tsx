import { FC } from "react";
import { blog_entry } from "src/App";
import EntryList from "./EntryList";
import { StyledMain } from "./Home.styles";
import Introduction from "./Introduction";

interface Props {
    blogEntries: blog_entry[];
};

const Home: FC<Props> = props => {

    return (
        <StyledMain as="main">
            <Introduction />
            <EntryList entries={props.blogEntries} />
        </StyledMain>
    )
}

export default Home;