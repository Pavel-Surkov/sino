import React from "react";
import SubmitModal from "../../../constant/SubmitModal";
import Title from "../../../constant/Title";
import Input from "../../../constant/Input";
import PrimaryBtn from "../../../constant/PrimaryButton";
import { font, flex } from "../../../base/functions";
import { styled, connect, useConnect } from "frontity";

import { useFormik } from "formik";

const ApplyForm = ({ modalOpened, setModalOpened }) => {
  const { state } = useConnect();

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      message: "",
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <SubmitModal
      maxWidth={1140}
      modalOpened={modalOpened}
      setModalOpened={setModalOpened}
    >
      <Title size="m" color="blue" marginBottom={48}>
        Submit Your Resume
      </Title>
      <Form onSubmit={formik.handleSubmit}>
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
          <span>Contact Email</span>
          <Input
            placeholder="ex. info@ux-mind.pro"
            name="contactEmail"
            onChange={formik.handleChange}
            value={formik.values.contactEmail}
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
        <LargeBlock>
          <FileWrapper>
            <FileLabel htmlFor="upload-photo">Upload your resume</FileLabel>
            <span>Accepted file types: PDF</span>
          </FileWrapper>
          <FileInput type="file" name="photo" id="upload-photo" />
        </LargeBlock>
        <LargeLabel>
          <span>Your Message</span>
          <Textarea
            placeholder="Type here"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </LargeLabel>
        <SubmitWrapper>
          <PrimaryBtn type="submit" content="Submit" />
        </SubmitWrapper>
      </Form>
    </SubmitModal>
  );
};

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: inline-block;
  margin-right: 16px;
  position: relative;
  color: var(--black);
  ${font(16, 24)};
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--black);
  }
  &:hover {
    color: var(--gray-900);
    &::before {
      background: var(--gray-900);
    }
  }
  &:active {
    color: var(--black);
    &::before {
      background: var(--black);
    }
  }
`;

const FileWrapper = styled.div`
  ${flex("row", "flex-end")};
  & span {
    color: var(--gray-900);
    ${font(12, 20)};
  }
`;

const SubmitWrapper = styled.div`
  margin-top: 32px;
  grid-column: 1 / 3;
  text-align: center;
  order: 20;
  & button {
    margin: 0 auto;
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
  @media screen and (max-width: 768px) {
    order: ${({ mobileOrder }) => (mobileOrder ? mobileOrder : "0")};
  }
`;

const LargeBlock = styled.div`
  grid-column: 1 / 3;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const LargeLabel = styled(Label)`
  grid-column: 1 / 3;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
  @media screen and (max-width: 768px) {
    order: ${({ mobileOrder }) => (mobileOrder ? mobileOrder : "0")};
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-gap: 16px;
  }
`;

export default connect(ApplyForm);
