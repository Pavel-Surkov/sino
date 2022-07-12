import React from "react";
import Title from "../../constant/Title";
import Container from "../../constant/Container";
import PositionsList from "./PositionsList";
import { styled, connect } from "frontity";
import { font } from "../../base/functions";

const JoinElement = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <Join>
      <Container>
        <Text>
          <Title
            size="xs"
            color="blue"
            maxWidth={698}
            marginBottom={isMobile ? 16 : 24}
          >
            Do you want to join our industry-leading team at Sino Logistics
            Corporation?
          </Title>
          <Subtitle>
            <p>
              We are always looking for creative and dynamic people to join our
              team of talented employees. If you think you have what it takes to
              make a difference in the world of logistics, then we would love to
              hear from you!
            </p>
          </Subtitle>
        </Text>
        <PositionsList />
      </Container>
    </Join>
  );
};

const Subtitle = styled.div`
  max-width: 907px;
  & p {
    margin: 0;
    ${font(24, 32)};
    letter-spacing: -0.02em;
    font-weight: 300;
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(18, 30)};
    }
  }
`;

const Text = styled.div`
  margin-bottom: 69px;
`;

const Join = styled.div`
  padding-top: 96px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(JoinElement);
