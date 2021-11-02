import { FC } from "react";
import { StyledHeader, StyledNav, StyledTitle } from "./Header.styles";
export {}

interface Props {
    title?: string,
};

const Header: FC<Props> = props => {
    
    return (
        <StyledHeader>
            <StyledTitle>{props.title || "My Blog"}</StyledTitle>
            <StyledNav>
                <p>HOME</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;