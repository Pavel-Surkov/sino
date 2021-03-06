import React from "react";
import ImageSection from "../../constant/ImageSection";
import Title from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import Input from "../../constant/Input";
import { validateEmail } from "../../functions/functions";
import { useFormik } from "formik";
import { styled, connect, css } from "frontity";

import image from "../../../assets/images/subscribtion-image.png";
import image2x from "../../../assets/images/subscribtion-image@2x.png";

const Subscribtion = ({ state, post }) => {
  const { isMobile } = state.theme;

  const formik = useFormik({
    initialValues: { email: "" },
    validate: (values) => validateEmail(values),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ImageSection
      image={post.acf.home_news_image_1x.url}
      image2x={post.acf.home_news_image_2x.url}
      last={true}
    >
      <Title
        style={isMobile ? { order: "-2" } : {}}
        size="s"
        color="blue"
        marginBottom={isMobile ? 24 : 40}
      >
        {post.acf.home_news_title}
      </Title>
      <form
        css={
          isMobile &&
          css`
            margin-top: 32px;
            width: 100%;
          `
        }
        onSubmit={formik.handleSubmit}
      >
        <InputWrapper>
          <Input
            maxWidth={isMobile ? "100%" : "426px"}
            type="email"
            name="email"
            placeholder={post.acf.home_news_input_placeholder}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </InputWrapper>
        <PrimaryButton type="submit" content={post.acf.home_news_link_text} />
      </form>
    </ImageSection>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

export default connect(Subscribtion);
