import React, { useState } from "react";
import Container from "../constant/Container";
import Hero from "../constant/HeroSection";
import PrimaryBtn from "../constant/PrimaryButton";
import Input from "../constant/Input";
import Select from "../constant/Select";
import { styled, connect } from "frontity";
import { font } from "../base/functions";

import { useFormik } from "formik";

import poster from "../../assets/images/quote-poster.png";

const modeValues = [
  "mode 1",
  "mode 2",
  "mode 3",
  "mode 4",
  "mode 5",
  "mode 6",
  "mode 7",
  "mode 8",
  "mode 9",
];

const RequestQuote = () => {
  const [isModeDropOpened, setIsModeDropOpened] = useState(true);

  const formik = useFormik({
    initialValues: {
      mode: "",
      message: "",
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <PageWrapper>
      <Hero image={poster} title="Request a Quote" />
      <Section>
        <Container>
          <Note>
            <p>
              Fill in the form below and one of our freights forwarding experts
              will contact you as soon as possible
            </p>
          </Note>
          <Form onSubmit={formik.handleSubmit}>
            <Label>
              <span>Mode</span>
              <Select
                isOpened={isModeDropOpened}
                setIsOpened={setIsModeDropOpened}
                name="mode"
                value={formik.values.mode}
                placeholder="-Select a Mode-"
                options={modeValues}
                changeHandler={(value) => {
                  formik.setFieldValue("mode", value);
                }}
              />
            </Label>
            <LargeLabel>
              <span>Your Message</span>
              <Textarea
                placeholder="Please describe how can we help you"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </LargeLabel>
            <SubmitWrapper>
              <PrimaryBtn type="submit" content="Submit" />
            </SubmitWrapper>
          </Form>
        </Container>
      </Section>
    </PageWrapper>
  );
};

const SubmitWrapper = styled.div`
  margin-top: 32px;
  grid-column: 1 / 3;
  & button {
    cursor: pointer;
  }
  @media screen and (max-width: 991px) {
    margin-top: 16px;
  }
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Textarea = styled.textarea`
  width: auto;
  resize: none;
  font-family: var(--font);
  box-sizing: border-box;
  ${font(18, 24)}
  color: var(--black);
  outline: none;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : "auto")};
  border-radius: 8px;
  border: 1px solid var(--blue-600);
  padding: 0.38889em 0.83333em;
  background: var(--white);
  position: relative;
  min-height: 129px;
  &::placeholder {
    color: var(--gray-900);
  }
`;

const Label = styled.label`
  display: block;
  & span {
    display: inline-block;
    ${font(16, 24)};
    margin-bottom: 8px;
  }
`;

const LargeLabel = styled(Label)`
  grid-column: 1 / 3;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
`;

const Note = styled.div`
  max-width: 791px;
  margin-bottom: 32px;
  & p {
    color: var(--black);
    margin: 0;
    ${font(24, 40)};
    letter-spacing: 0.04em;
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

export default connect(RequestQuote);
