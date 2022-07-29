import React, { useState, useEffect } from "react";
import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import Container from "../constant/Container";
import Hero from "../constant/HeroSection";
import PrimaryBtn from "../constant/PrimaryButton";
import Input from "../constant/Input";
import Select from "../constant/Select";
import { styled, connect } from "frontity";
import { font } from "../base/functions";
import { processDate } from "../functions/functions";

import { useFormik } from "formik";

import calendar from "../../assets/images/svg/Calendar.svg";
import poster from "../../assets/images/quote-poster.png";

const modeValues = [
  "value 1",
  "value 2",
  "value 3",
  "value 4",
  "value 5",
  "value 6",
  "value 7",
  "value 8",
  "value 9",
  "value 10",
];

const RequestQuote = () => {
  const [isModeDropOpened, setIsModeDropOpened] = useState(false);
  const [isOriginDropOpened, setIsOriginDropOpened] = useState(false);
  const [isDestinationDropOpened, setIsDestinationDropOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      mode: "",
      companyName: "",
      origin: "",
      contactName: "",
      destination: "",
      contactPhone: "",
      productsReadyToExport: "",
      contactEmail: "",
      message: "",
    },
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => {
    new AirDatepicker("#products-datepicker", {
      locale: localeEn,
      firstDay: 1,
      daysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      dateFormat(date) {
        const dateString = processDate(date);

        return dateString;
      },
      onSelect({ date }) {
        const value = processDate(date);

        formik.setFieldValue("productsReadyToExport", value);
      },
    });
  }, []);

  return (
    <PageWrapper>
      <Hero image={poster} title="Request a Quote" />
      <Section>
        <RequestContainer>
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
              <span>Origin</span>
              <Select
                isOpened={isOriginDropOpened}
                setIsOpened={setIsOriginDropOpened}
                name="origin"
                value={formik.values.origin}
                placeholder="-Select an Origin-"
                options={modeValues}
                changeHandler={(value) => {
                  formik.setFieldValue("origin", value);
                }}
              />
            </Label>
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
              <span>Destination</span>
              <Select
                isOpened={isDestinationDropOpened}
                setIsOpened={setIsDestinationDropOpened}
                name="destination"
                value={formik.values.destination}
                placeholder="-Select a Destination-"
                options={modeValues}
                changeHandler={(value) => {
                  formik.setFieldValue("destination", value);
                }}
              />
            </Label>
            <Label>
              <span>Contact Phone</span>
              <Input
                placeholder="ex. +1 562-985-4111"
                type="tel"
                name="contactPhone"
                onChange={formik.handleChange}
                value={formik.values.contactPhone}
              />
            </Label>
            <Label>
              <span>When will the products be ready to be exported</span>
              <DatepickerWrapper>
                <Input
                  id="products-datepicker"
                  placeholder="2022-01-01"
                  name="productsReadyToExport"
                  value={formik.values.productsReadyToExport}
                  onChange={formik.handleChange}
                />
                <Calendar>
                  <img width="24" height="24" src={calendar} alt="calendar" />
                </Calendar>
              </DatepickerWrapper>
            </Label>
            <Label>
              <span>Contact Email</span>
              <Input
                placeholder="ex. info@ux-mind.pro"
                type="email"
                name="contact"
                onChange={formik.handleChange}
                value={formik.values.contactName}
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
        </RequestContainer>
      </Section>
    </PageWrapper>
  );
};

const Calendar = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(calc(-50% + 1px));
`;

const DatepickerWrapper = styled.div`
  position: relative;
`;

const SubmitWrapper = styled.div`
  margin-top: 32px;
  grid-column: 1 / 3;
  text-align: center;
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

const RequestContainer = styled(Container)`
  max-width: 1140px;
`;

const Section = styled.section`
  padding-top: 96px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 145px;
  }
`;

const PageWrapper = styled.div`
  & .hero-container {
    max-width: 1140px;
  }
`;

export default connect(RequestQuote);
