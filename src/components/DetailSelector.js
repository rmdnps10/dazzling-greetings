import React from "react";
import styled from "styled-components";
import starIcon from "../assets/images/starLogo.svg";

function DetailSelector({ bright, isShow }) {
  return (
    <DetailSelectorWrapper isShow={isShow}>
      <Name>
        김란사 <span>지사</span>
      </Name>
      <YearBox>
        <YearFlex>
          {bright.first ? <StarIcon src={starIcon} /> : <Circle />}
          <Content isBold={bright.first}>이화학당 입학 </Content>
        </YearFlex>
        <Line />
        <YearFlex>
          {bright.second ? <StarIcon src={starIcon} /> : <Circle />}
          <Content isBold={bright.second}>
            우리나라 최초의 여성 대학교수{" "}
          </Content>
        </YearFlex>
        <Line />
        <YearFlex>
          {bright.third ? <StarIcon src={starIcon} /> : <Circle />}
          <Content isBold={bright.third}>이문회 지도교수 </Content>
        </YearFlex>
        <Line />
        <YearFlex>
          {bright.fourth ? <StarIcon src={starIcon} /> : <Circle />}
          <Content isBold={bright.fourth}>파이프오르간 설치 </Content>
        </YearFlex>{" "}
        <Line />
        <YearFlex>
          {bright.fifth ? <StarIcon src={starIcon} /> : <Circle />}
          <Content isBold={bright.fifth}>안창호에게 보낸 편지</Content>
        </YearFlex>{" "}
      </YearBox>
    </DetailSelectorWrapper>
  );
}

const DetailSelectorWrapper = styled.div`
  position: fixed;
  display: ${(props) => (props.isShow ? "block" : "none")};
  top: 100px;
  left: 100px;
  z-index: 9999;
`;

const YearBox = styled.div`
  margin-left: 30px;
`;

const StarIcon = styled.img`
  width: 23px;
  margin-left: -3px;
  height: 26px;
`;

const YearFlex = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  cursor: pointer;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Line = styled.div`
  width: 1px;
  margin-left: 8px;
  background: rgba(255, 255, 255, 0.7);
  height: 67px;
`;
const Name = styled.div`
  color: #fff;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 25px;
  span {
    font-size: 40px;
  }
`;
const Content = styled.div`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: ${(props) => (props.isBold ? "700" : "400")};
  line-height: normal;
`;
export default DetailSelector;
