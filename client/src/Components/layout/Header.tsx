import { FC } from "react";
import { StyledHeader, StyledNav, StyledBlogTitle } from "./Header.styles";
export {}

interface Props {
    title?: string,
};

const Header: FC<Props> = props => {
    
    return (
        <StyledHeader>
            <StyledBlogTitle>{props.title || "My Blog"}</StyledBlogTitle>
            <StyledNav>
                <p>HOME</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;