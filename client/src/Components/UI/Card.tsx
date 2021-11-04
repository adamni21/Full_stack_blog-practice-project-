import { FC } from "react";
import { StyledCard } from "./Card.styles";

interface Props {};

const Card: FC<Props> = props => {
    
    return (
        <StyledCard>{props.children}</StyledCard>
    )
}

export default Card;