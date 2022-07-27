import React, { useState } from "react";
import Container from "../constant/Container";
import Hero from "../constant/HeroSection";
import PrimaryBtn from "../constant/PrimaryButton";
import Input from "../constant/Input";
import { styled, connect } from "frontity";
import { font } from "../base/functions";

import { useFormik } from "formik";

import poster from "../../assets/images/quote-poster.png";
import drop from "../../assets/images/svg/drop-blue.svg";

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
                onClick={() => setIsModeDropOpened(true)}
              >
                <Input
                  name="mode"
                  value={formik.values.mode}
                  placeholder="-Select a Mode-"
                />
                {isModeDropOpened && (
                  <Dropdown>
                    <DropdownItem>Mode 1</DropdownItem>
                    <DropdownItem>Mode 2</DropdownItem>
                    <DropdownItem>Mode 3</DropdownItem>
                    <DropdownItem>Mode 4</DropdownItem>
                    <DropdownItem>Mode 5</DropdownItem>
                    <DropdownItem>Mode 6</DropdownItem>
                    <DropdownItem>Mode 7</DropdownItem>
                    <DropdownItem>Mode 8</DropdownItem>
                    <DropdownItem>Mode 9</DropdownItem>
                    <DropdownItem>Mode 10</DropdownItem>
                  </Dropdown>
                )}
              </Select>
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

const DropdownItem = styled.li`
  padding: 0;
  width: 100%;
  padding: 4px 8px;
  border-radius: 8px;
  ${font(18, 24)};
  color: var(--black);
  background: var(--white);
  &:hover {
    color: var(--white);
    background: var(--blue-600);
  }
  &:active {
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Dropdown = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 1;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: 287px;
  overflow-y: auto;
  background: var(--white);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 8px;
  background: var(--white);
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--gray-900);
    border-radius: 4px;
  }
`;

const Select = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    width: 12px;
    height: 6px;
    background: url(${drop}) no-repeat 50% / cover;
    transform: ${({ isOpened }) =>
      isOpened ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)"};
  }
`;

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
