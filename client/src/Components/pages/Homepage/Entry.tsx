import { FC } from "react";
import { StyledEntry, StyledEntryTitle, StyledPreview, } from "./Entry.styles";

interface Props {
    title: string,
    content: string,
};

const Entry: FC<Props> = props => {
    
    let contentPreview = props.content.slice(0, 100);
    
    if (contentPreview[99] === " ") contentPreview = contentPreview.slice(0, 99)
    if (contentPreview.slice(-1) === ".") contentPreview = contentPreview.slice(0, -1)

    return (
        <StyledEntry>
            <StyledEntryTitle>{props.title}</StyledEntryTitle>
            <StyledPreview>{contentPreview}... <a href="_">read more</a></StyledPreview>
        </StyledEntry>
    )
}

export default Entry;