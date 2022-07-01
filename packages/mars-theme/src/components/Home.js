import React from "react";
import { connect, css } from "frontity";

const Home = () => {
  return (
    <div
      css={css`
        background: lightblue;
        padding: 60px 0;
        width: 100%;
      `}
    >
      Home
    </div>
  );
};

export default connect(Home);
