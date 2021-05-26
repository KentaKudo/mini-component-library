import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        <p>{displayedValue}</p>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 12px 16px;
  position: relative;
  width: max-content;

  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const PresentationalBit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1rem;
  line-height: ${19 / 16}rem;

  & p {
    margin-right: 24px;
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  color: transparent;
  background-color: transparent;
  border: none;
`;

export default Select;
