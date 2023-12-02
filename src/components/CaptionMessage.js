import React from "react";
import styled from "styled-components";

function CaptionMessage({ title, content }) {
  return (
    <CaptionContainer>
      <CaptionLeftContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </CaptionLeftContainer>
    </CaptionContainer>
  );
}

const CaptionContainer = styled.div`
  position: sticky;
  z-index: 999;
  top: 200px;
  width: 100%;
`;

const CaptionLeftContainer = styled.div`
  margin-left: auto;
  margin-right: 50px;
  width: 600px;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;
const Title = styled.div`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Content = styled.div`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default CaptionMessage;
