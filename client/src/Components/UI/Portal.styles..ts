import styled from "styled-components";

interface StyledPortalProps { backgroundColor?: string }
export const StyledPortal = styled.div`
    position: absolute;
    overflow-y: hidden;
    z-index: 50;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${ ({ backgroundColor }: StyledPortalProps) => backgroundColor && "#2222" };
`;