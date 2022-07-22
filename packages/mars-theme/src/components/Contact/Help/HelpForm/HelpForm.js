import React from "react";
import Input from "../../../constant/Input";
import { styled } from "frontity";
import { font } from "../../../base/functions";
import PrimaryBtn from "../../../constant/PrimaryButton";

const HelpForm = () => {
  return (
    <Form>
      <Wrapper>
        <Label>
          <span>Contact Name</span>
          <Input placeholder="ex. Jack Nilson" name="contactName" />
        </Label>
        <Label>
          <span>Company Name</span>
          <Input placeholder="ex. DHL" name="companyName" />
        </Label>
        <Label>
          <span>Contact Phone</span>
          <Input placeholder="ex. +1 562-985-4111" name="contactPhone" />
        </Label>
        <Label>
          <span>Country</span>
          <Input placeholder="-Select a Country-" name="country" />
        </Label>
        <Label>
          <span>Contact Email</span>
          <Input placeholder="ex. info@ux-mind.pro" name="contactEmail" />
        </Label>
        <Label>
          <span>Nature of Enquiry</span>
          <Input placeholder="ex. Cost Estimation" name="natureOfEnquiry" />
        </Label>
        <LargeLabel>
          <span>Your Message</span>
          <Textarea
            placeholder="Please describe how can we help you"
            name="message"
          />
        </LargeLabel>
        <SubmitWrapper>
          <PrimaryBtn type="submit" content="Submit" />
        </SubmitWrapper>
      </Wrapper>
    </Form>
  );
};

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
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-row-gap: 16px;
  grid-column-gap: 24px;
`;

const Form = styled.form`
  margin-bottom: 91px;
`;

export default HelpForm;
