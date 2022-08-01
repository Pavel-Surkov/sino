import React from "react";
import Container from "../constant/Container";
import Title from "../constant/Title";
import TextBlock from "../PrivacyPolicy/TextBlock/TextBlock";
import { styled } from "frontity";
import { font } from "../base/functions";

const TermsOfUse = ({post}) => {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <Title size="xs" color="blue">
            Terms of Use
          </Title>
          <Subtitle>
            <p>
              Sino Logistics provides this website as a public service for
              informational and educational purposes only.
            </p>
            <p>
              You can use, publish, or download the material displayed on this
              website by complying with our terms and conditions.
            </p>
          </Subtitle>
          <Content>
            <TextBlock title="Disclaimer">
              <p>
                Content and Information appears in this website is compiled
                by Sino Logistics from various authorized sources and can
                be changed without advance notice. Every time you view this
                website, you agree to abide by the terms of use available.
                Therefore, every time you visit the website. You should check
                the terms and conditions of use first.
              </p>
              <p>
                Please be aware that this website or the content displayed
                on this website is not advice or legal opinion. The website
                is not giving advice on investments, business, or any trade. You
                are, therefore, at your own risk if any action or decision
                is made by relying on content from this website.
              </p>
              <p>
                Sino Logistics and the officials of Sino Logistics are not
                responsible for you or any person, directly or indirectly, for
                any damage arising from the use of the content on this including
                the absence of information, inaccurate of information,
                incomplete of information, cyber-attack, and failure
                of communication.
              </p>
            </TextBlock>
            <TextBlock title="Copyrights">
              <p>
                The Website and included content (and any derivative works
                or enhancements of the same) including, but not limited to, all
                text, illustrations, files, images, software, scripts, graphics,
                photos, sounds, music, videos, information, content, materials,
                products, services, URLs, technology, documentation, and
                interactive features (collectively, the «Website Content») and
                all intellectual property rights to the same are owned by us,
                our licensors, or both.
              </p>
              <p>
                If you download any information or software from this website,
                you agree that such copy is only for your personal,
                non-commercial use, and you will not copy it or remove
                or obscure any copyright or other notices or legends contained
                in any such information
              </p>
            </TextBlock>
            <TextBlock title="Right to Access">
              <p>
                Sino Logistics reserves the right to update or modify the
                website or any content on this website at any time. In addition,
                Sino Logistics reserves the right to deny or restrict any
                person’s access to this website or from any IP address without
                needing to notify or state the reasons for doing.
              </p>
            </TextBlock>
            <TextBlock title="Links to Other Website">
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by the Company.
              </p>
              <p>
                The Company has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any
                third-party web sites or services. You further acknowledge and
                agree that the Company shall not be responsible or liable,
                directly, or indirectly, for any damage or loss caused or
                alleged to be caused by or in connection with the use of or
                reliance on any such content, goods or services available on or
                through any such web sites or services.
              </p>
              <p>
                We strongly advise you to read the terms and conditions and
                privacy policies of any third-party websites or services that
                You visit.
              </p>
            </TextBlock>
            <TextBlock title="Enforcement Law">
              <p>
                Terms and Conditions in this website are enforced under the Law
                of Thailand.
              </p>
            </TextBlock>
          </Content>
        </Container>
      </Section>
    </PageWrapper>
  );
};

const Content = styled.div`
  margin-top: 40px;
  max-width: 1020px;
  @media screen and (max-width: 991px) {
    margin-top: 32px;
  }
`;

const Subtitle = styled.div`
  margin-top: 24px;
  & p {
    font-weight: 300;
    ${font(18, 30)};
    color: var(--black);
    margin: 0;
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Section = styled.section`
  padding-top: 96px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 145px;
  }
`;

const PageWrapper = styled.div``;

export default TermsOfUse;
