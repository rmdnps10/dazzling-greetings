import React from "react";
import styled from "styled-components";
import Space from "./Space";

function Footer() {
  return (
    <FooterContainer>
      <Space height={"58px"} />
      <FooterWrapper>
        <LeftSide>
          <Space height={"16px"} />
          <Text>
            ©2023 Sogang University Art&Technology. all rights reserved.
          </Text>
          <Space height={"66px"} />
          <Text>t. +82 1047894288</Text>
          <Space height={"16px"} />
          <Text>m. cocoma112@sogang.ac.kr</Text>
        </LeftSide>
        <RightSide>
          <Space height={"16px"} />
          <Organization>당진시청 문화관광과</Organization>
          <Organization>부산박물관</Organization>
          <Organization>국사편찬위원회회</Organization>
          <Organization>독립기념관</Organization>
          <Organization>김란사 후손 김영택님</Organization>
          <Organization>사단법인 김의기 기념사업회</Organization>
        </RightSide>
      </FooterWrapper>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  height: 306px;
  width: 100%;
  background-color: black;
`;

const FooterWrapper = styled.div`
  width: 90%;
  border-top: 2px solid rgba(255, 255, 255, 0.65);
  margin: 0 auto;
  display: flex;
`;

const Text = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const LeftSide = styled.div``;
const RightSide = styled.div`
  margin-left: auto;
  margin-right: 10px;
  width: 210px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const Organization = styled.div`
  text-align: left;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export default Footer;
