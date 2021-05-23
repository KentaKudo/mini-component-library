import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
    "--wrapper-border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
    "--wrapper-border-radius": "4px",
  },
  large: {
    "--height": "16px",
    "--padding": "4px",
    "--wrapper-border-radius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size];
  return (
    <Wrapper
      style={style}
      role="progressbar"
      aria-valuenow={{ value }}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar value={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  padding: var(--padding);

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: var(--wrapper-border-radius);
`;

const Bar = styled.div`
  width: ${(props) => props.value}%;
  height: var(--height);

  background-color: ${COLORS.primary};

  --border-radius-right: ${(props) => (props.value < 100 ? 0 : 4)}px;
  border-radius: 4px var(--border-radius-right) var(--border-radius-right) 4px;
`;

export default ProgressBar;
