import React from "react";
import { font } from "../base/functions";
import { connect, styled, css } from "frontity";

const Paragraph = ({ maxWidth, marginBottom, children }) => {
  return (
    <Wrapper
      maxWidth={maxWidth}
      className="paragraph-wrapper"
      mb={marginBottom}
    >
      <p>{children}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}` : "")}
  ${({ mb }) => (mb ? `margin-bottom: ${mb}` : "")};
  & p {
    margin: 0;
    ${font(18, 30)};
    color: var(--black);
    font-weight: 400;
  }
`;

export default connect(Paragraph, { injectProps: false });
