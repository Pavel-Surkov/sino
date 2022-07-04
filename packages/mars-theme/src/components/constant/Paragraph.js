import React from "react";
import { font } from "../base/functions";
import { connect, styled } from "frontity";

const Paragraph = ({ marginBottom, children }) => {
  return (
    <Wrapper mb={marginBottom}>
      <p>{children}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ mb }) => (mb ? `margin-bottom: ${mb}` : "")};
  & p {
    margin: 0;
    ${font(18, 30)};
    color: var(--black);
    font-weight: 400;
  }
`;

export default connect(Paragraph, { injectProps: false });
