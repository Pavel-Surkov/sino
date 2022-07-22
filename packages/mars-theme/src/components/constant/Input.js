import React from "react";
import { connect, styled } from "frontity";
import { font } from "../base/functions";

const PrimaryInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  maxWidth,
}) => {
  return (
    <Input
      type={type ? type : "text"}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      maxWidth={maxWidth}
    />
  );
};

const Input = styled.input`
  width: auto;
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
  &::placeholder {
    color: var(--gray-900);
  }
`;

export default connect(PrimaryInput, { injectProps: false });
