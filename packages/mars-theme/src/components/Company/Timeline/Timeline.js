import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import SwiperButtons from "../../constant/SwiperButtons";
import { connect, styled } from "frontity";
import { flex } from "../../base/functions";

const Timeline = ({ styled }) => {
  return (
    <TimelineSection>
      <TimelineContainer>
        <Title size="m" color="blue">
          Timeline
        </Title>
        <LineWrapper>
          <svg
            width="933"
            height="16"
            viewBox="0 0 933 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-8.06579e-08"
              y1="8"
              x2="917.083"
              y2="7.99991"
              stroke="#4279B8"
              strokeWidth="2"
            />
            <circle
              cx="925"
              cy="8"
              r="7"
              transform="rotate(-180 925 8)"
              stroke="#4279B8"
              strokeWidth="2"
            />
          </svg>
        </LineWrapper>
        <SwiperNav>
          <SwiperButtons spaceBetween={24} />
        </SwiperNav>
      </TimelineContainer>
      <SwiperContainer></SwiperContainer>
    </TimelineSection>
  );
};

const SwiperContainer = styled.div`
  margin-top: 35px;
`;

const SwiperNav = styled.div`
  ${flex()};
  margin-left: auto;
  margin-top: 20px;
`;

const LineWrapper = styled.div`
  margin-top: 35px;
  margin-left: 16px;
  width: 100%;
  height: 100%;
  max-width: calc(100% - 210px - 229px);
  & svg {
    width: inherit;
  }
`;

const TimelineContainer = styled(Container)`
  ${flex("row")};
`;

const TimelineSection = styled.section`
  padding-top: 96px;
`;

export default connect(Timeline);
