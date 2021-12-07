import { FC } from "react";

import { StyledHeader, StyledNav, StyledBlogTitle } from "./Header.styles";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
    blogTitle?: string,
};

const Header: FC<Props> = props => {
    const navigate = useNavigate();
    const navigateHome = () => navigate("/home");

    return (
        <StyledHeader>
            <StyledBlogTitle onClick={navigateHome}>{props.blogTitle || "My Blog"}</StyledBlogTitle>
            <StyledNav>
                <NavLink to="/home" className={navData => `${navData.isActive ? "isActive" : "notActive"}`}>HOME</NavLink>
                <NavLink to="/about" className={navData => `${navData.isActive ? "isActive" : "notActive"}`}>ABOUT</NavLink>
                <NavLink to="/404" className={navData => `${navData.isActive ? "isActive" : "notActive"} `}>CONTACT</NavLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;