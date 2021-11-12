import { FC } from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader, StyledNav, StyledBlogTitle } from "./Header.styles";
export {}

interface Props {
    title?: string,
};

const Header: FC<Props> = props => {
    console.log("render");
    return (
        <StyledHeader>
            <StyledBlogTitle>{props.title || "My Blog"}</StyledBlogTitle>
            <StyledNav>
                <NavLink to="/home" className={navData => `${navData.isActive ? "isActive" : "notActive"}`}>HOME</NavLink>
                <NavLink to="/about" className={navData => `${navData.isActive ? "isActive" : "notActive"}`}>ABOUT US</NavLink>
                <NavLink to="/404" className={navData => `${navData.isActive ? "isActive" : "notActive"} `}>CONTACT US</NavLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;