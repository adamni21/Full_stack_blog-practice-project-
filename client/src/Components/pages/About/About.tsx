import { FC } from "react";

import { StyledContent, StyledTitle, StyledMain, StyledAbout } from "./About.styles";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac efficitur nulla. 
  Proin risus nunc, eleifend in est id, maximus mollis elit. Cras eget facilisis sem, eget pharetra erat. 
  In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
  per inceptos himenaeos. Curabitur convallis sodales nibh non consequat. Etiam aliquet iaculis odio a tincidunt. 
  Vivamus at nulla tempor, consequat sem vel, elementum tellus.
  Nulla finibus auctor finibus. Cras vitae tempus ligula, ac vulputate eros. Mauris at risus metus. 
  Sed blandit, odio aliquet dignissim lacinia, nulla magna tincidunt justo, aliquet gravida justo dolor sed leo. 
  Vestibulum pellentesque magna id mauris tempor pulvinar. Aenean pulvinar lectus gravida, pretium augue nec, tempor metus. 
  Nullam pharetra vitae turpis sit amet facilisis. Maecenas efficitur, nisl ut dictum bibendum,
  urna lacus faucibus arcu, sed mollis elit nunc eu mi.
  Nunc facilisis ex non aliquet pharetra. Donec bibendum posuere tristique. Aenean efficitur laoreet pulvinar. 
  Aenean ac leo vel massa gravida sollicitudin non quis lectus. Duis tempus non erat ut laoreet. 
  In sapien magna, auctor a lacus eu, ornare commodo arcu. Cras vitae finibus sem. Duis pulvinar, diam in accumsan gravida, 
  elit augue blandit eros, quis congue urna lorem vel augue. Ut ac nibh ut urna suscipit convallis. 
  Sed elementum quam at odio hendrerit, vel elementum odio facilisis. Praesent quis ante tortor.
  Donec varius sapien mi. Donec sed sem eu nisl dictum interdum. Sed vel tempus est. Mauris bibendum lobortis convallis. 
  Morbi tristique lorem in justo porta pretium. Integer at accumsan sem, non pretium neque. 
  Ut eget arcu vel velit mollis porta non non justo. Duis lobortis vestibulum turpis, eu euismod nulla fringilla.`



const About: FC = () => {

  return (
    <StyledMain>
      <StyledAbout>
        <StyledTitle>About</StyledTitle>
        <StyledContent>{content}</StyledContent>
      </StyledAbout>
    </StyledMain>
  );
};


export default About;