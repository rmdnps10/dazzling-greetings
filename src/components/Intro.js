import React from "react";
import starLogo from "../assets/images/starLogo.svg";
import styled from "styled-components";
function Intro({ isShow }) {
  return (
    <IntroContainer isShow={isShow}>
      <StarImage src={starLogo} />
      <IntroTextContainer>
        <WhiteText>
          본 프로젝트는 대한민국 자유 정신의 뿌리인 독립운동가의 현존성을
          회복하기
          <br />
          위해 기획된 독립운동가 목소리 복원 프로젝트입니다. 목소리 감상을 위해
          사<br />
          용하고 계신 전자기기의 음향을 확인하시길 바랍니다.{" "}
        </WhiteText>
        <GrayText>
          *해당 프로젝트에서 복원한 목소리는 AI 모델을 통해 생성되었습니다.{" "}
        </GrayText>
      </IntroTextContainer>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  background-color: black;
  display: ${(props) => (props.isShow ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100vw;
  height: 100vh;
`;

export const WhiteText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const GrayText = styled.div`
  color: rgba(255, 255, 255, 0.58);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 100px;
  text-align: center;
`;
const IntroTextContainer = styled.div``;
export const StarImage = styled.img`
  margin-top: 200px;
  width: 14px;
`;

export default Intro;
