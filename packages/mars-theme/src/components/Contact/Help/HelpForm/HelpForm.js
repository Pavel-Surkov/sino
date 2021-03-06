import React, { useState } from "react";
import Input from "../../../constant/Input";
import PrimaryBtn from "../../../constant/PrimaryButton";
import SubmitModal from "../../../constant/SubmitModal";
import { styled } from "frontity";
import { font } from "../../../base/functions";

import { useFormik } from "formik";

const HelpForm = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      contactName: "",
      companyName: "",
      contactPhone: "",
      country: "",
      contactEmail: "",
      natureOfEnquiry: "",
      message: "",
    },
    onSubmit: (values) => {
      setModalOpened(true);

      console.log(values);
    },
  });

  return (
    <>
      <SubmitModal modalOpened={modalOpened} setModalOpened={setModalOpened}>
        <ModalText>
          <p>Your request has been sent. We will contact you soon.</p>
        </ModalText>
        <CloseButtonWrapper>
          <CloseButton onClick={() => setModalOpened(false)}>Great</CloseButton>
        </CloseButtonWrapper>
      </SubmitModal>
      <Form onSubmit={formik.handleSubmit}>
        <Wrapper>
          <Label>
            <span>Contact Name</span>
            <Input
              placeholder="ex. Jack Nilson"
              name="contactName"
              onChange={formik.handleChange}
              value={formik.values.contactName}
            />
          </Label>
          <Label>
            <span>Company Name</span>
            <Input
              placeholder="ex. DHL"
              name="companyName"
              onChange={formik.handleChange}
              value={formik.values.companyName}
            />
          </Label>
          <Label>
            <span>Contact Phone</span>
            <Input
              placeholder="ex. +1 562-985-4111"
              name="contactPhone"
              onChange={formik.handleChange}
              value={formik.values.contactPhone}
            />
          </Label>
          <Label>
            <span>Country</span>
            <Input
              placeholder="-Select a Country-"
              name="country"
              onChange={formik.handleChange}
              value={formik.values.country}
            />
          </Label>
          <Label>
            <span>Contact Email</span>
            <Input
              placeholder="ex. info@ux-mind.pro"
              name="contactEmail"
              onChange={formik.handleChange}
              value={formik.values.contactEmail}
            />
          </Label>
          <Label>
            <span>Nature of Enquiry</span>
            <Input
              placeholder="ex. Cost Estimation"
              name="natureOfEnquiry"
              onChange={formik.handleChange}
              value={formik.values.natureOfEnquiry}
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
        </Wrapper>
      </Form>
    </>
  );
};

const CloseButton = styled.button`
  border: none;
  margin-left: auto;
  ${font(24, 30)};
  color: var(--white);
  padding: 0.83333em 1.25em;
  background: var(--lightblue-250);
  border-radius: 8px;
  width: 100%;
  max-width: 325px;
  cursor: pointer;
  &:hover {
    background: var(--lightblue-300);
  }
  &:active {
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 991px) {
    color: var(--gray-menu);
    background: var(--white);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    &:hover {
      color: var(--gray-menu);
      background: var(--white);
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));
    }
    &:active {
      color: var(--gray-menu);
      background: var(--white);
      box-shadow: 0px 0px 10px 0px #0000001a inset;
      filter: none;
    }
  }
`;

const ModalText = styled.div`
  margin-bottom: 40px;
  text-align: center;
  & p {
    ${font(24, 30)};
    margin: 0 auto;
    max-width: 308px;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
    & p {
      ${font(16, 30)};
      max-width: 220px;
    }
  }
`;

const CloseButtonWrapper = styled.div`
  text-align: center;
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-row-gap: 16px;
  grid-column-gap: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const Form = styled.form`
  margin-bottom: 91px;
  @media screen and (max-width: 991px) {
    margin-bottom: 64px;
  }
`;

export default HelpForm;
