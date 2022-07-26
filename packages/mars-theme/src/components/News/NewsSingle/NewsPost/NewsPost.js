import React from "react";
import Title from "../../../constant/Title";
import Container from "../../../constant/Container";
import { styled, connect } from "frontity";
import { font, flex } from "../../../base/functions";

import corporation from "../../../../assets/images/corporation-thanks.jpg";
import corporation2x from "../../../../assets/images/corporation-thanks@2x.jpg";
import share from "../../../../assets/images/svg/bi_share.svg";

const post = {
  id: 2,
  title:
    "Sino Logistics Corporation Thanks Customers & Partners with ‘Sino Golf Invitational 2021’",
  date: "11 Jan 2022",
  link: "/news-single/",
  image: corporation,
  image2x: corporation2x,
  text: [
    `Sino Logistics Corporation Public Company Limited organized an exclusive golf competition, ‘Sino Golf Invitational 2021’ at Amata Spring Country Club Golf Course in Chonburi on December 7th, 2021. The company hosted the event to express its gratitude toward its customers and partners for their support throughout 2021. This is the second year in a row the company has held this event.`,
    "To liven up the occasion, Thailand’s famous Pro-Golfers, Pro-Air – Ms. Saruttaya Ngam-Usawan, and Pro-Jack – Mr. Vorapol Mauthorn joined for the ‘Meet the Pro’ activity, which included a mini competition to raise funds for further development of Wat Tatuthumporn Temple in Nakhon Ratchasima province.",
    "Sino Logistics Corporation and R. K. INTERNATIONAL FREIGHT even awarded THB 100,000 for a Hole-in-One winner. Still, overall, the event was fun and joyful for all the 150 participants from customer and partner organizations, including shipping lines, airlines, trucking companies, and terminals, who spent quality time together.",
  ],
};

const NewsPost = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <Container>
        <PostContainer>
          <Title size="m" color="black" marginBottom={isMobile ? 16 : 54}>
            {post.title}
          </Title>
          <AdditionalBlock>
            <Date>{post.date}</Date>
            <ShareBtn>
              <span>Share</span>
              <img width="24" height="24" src={share} alt="share" />
            </ShareBtn>
          </AdditionalBlock>
          <ImageWrapper>
            <img
              src={post.image}
              srcSet={`${post.image} 1x, ${
                post.image2x ? post.image2x : post.image
              } 2x`}
              alt=""
            />
          </ImageWrapper>
          <Article>
            {post.text.map((p) => (
              <p key={p.slice(0, 11)}>{p}</p>
            ))}
          </Article>
        </PostContainer>
      </Container>
    </Section>
  );
};

const Article = styled.div`
  & p {
    ${font(18, 30)};
    margin: 0;
    margin-bottom: 8px;
    font-weight: 300;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 48px;
  & img {
    border-radius: 20px;
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
  }
`;

const ShareBtn = styled.button`
  background: transparent;
  border: none;
  ${flex("row", "center")};
  cursor: pointer;
  & span {
    display: inline-block;
    ${font(18, 30)};
    margin-right: 8px;
    color: var(--blue-600);
  }
`;

const Date = styled.p`
  ${font(18, 30)};
  margin: 0;
  color: var(--gray-900);
`;

const AdditionalBlock = styled.div`
  ${flex("row", "center", "space-between")}
  margin-bottom: 16px;
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const PostContainer = styled.div`
  max-width: 1023px;
  @media screen and (max-width: 991px) {
    & h2 {
      ${font(24, 32)};
    }
  }
`;

const Section = styled.section`
  padding-top: 96px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(NewsPost);
