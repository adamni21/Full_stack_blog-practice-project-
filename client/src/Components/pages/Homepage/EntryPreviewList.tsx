import { FC } from "react";
import { blog_entry } from "src/App";
import Entry from "./EntryPreview";
import { StyledEntryList } from "./EntryPreviewList.styles";

interface Props {
    entries: blog_entry[],
};

const EntryList: FC<Props> = props => {
    
    return (
        <StyledEntryList>
            { props.entries.map(entry => <Entry key={entry.id} title={entry.title} content={entry.content} id={entry.id}/>) }
        </StyledEntryList>
    );
}

export default EntryList;