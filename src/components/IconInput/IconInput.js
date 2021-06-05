import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    padding: "4px 0 4px 24px",
    iconSize: 16,
    underlineWidth: "1px",
    fontSize: 14 / 16 + "rem",
    lineHeight: 16 / 16 + "rem",
  },
  large: {
    padding: "7px 0 7px 36px",
    iconSize: 24,
    underlineWidth: "2px",
    fontSize: 18 / 16 + "rem",
    lineHeight: 21 / 16 + "rem",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const props = SIZES[size];
  if (!props) {
    throw new Error(`invalid size: ${size}`);
  }

  return (
    <Wrapper
      width={width}
      style={{
        "--underline-width": props.underlineWidth,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--icon-size": props.iconSize + "px" }}>
        <Icon id={icon} size={props.iconSize} />
      </IconWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          "--padding": props.padding,
          "--font-size": props.fontSize,
          "--line-height": props.lineHeight,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: ${(p) => p.width}px;
  border-bottom: var(--underline-width) solid ${COLORS.black};

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--icon-size);
`;

const Input = styled.input`
  padding: var(--padding);
  width: inherit;

  border: none;
  background-color: transparent;

  font-weight: bold;
  font-size: var(--font-size);
  line-height: var(--line-height);

  outline-offset: 4px;

  color: inherit;

  &::placeholder {
    font-weight: normal;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
