import React from "react";
import styled from "styled-components";

function Space({ height }) {
  return <StyledSpace height={height}></StyledSpace>;
}

const StyledSpace = styled.div`
  height: ${(props) => props.height};
`;

export default Space;
