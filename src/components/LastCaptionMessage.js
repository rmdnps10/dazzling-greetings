import React from "react";
import styled from "styled-components";
import starIcon from "../assets/images/starLogo.svg";
import Space from "./Space";
import arrowIcon from "../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";
function LastCaptionMessage() {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate("/");
  };
  return (
    <LastCaptionSection>
      <LastCaptionMessageContainer>
        <Space height={"600px"} />
        <Title>안창호에게 보낸 편지</Title>
        <StarIcon src={starIcon} />
        <Text>
          모금 활동에 동참해준 미국의 동포들에게 서울에 파이프 오르간이
          설치됐다는 소식을 전할 수 있어 기쁩니다. 감사한 마음으로, 정동교회에
          설치한 파이프 오르간 앞에서 이화학당 학생들과 함께 촬영한 사진을
          보냅니다. <br /> 미국에 거주하는 동포들이 오르간을 구매해 서울
          정동교회에 설치하는 건 매우 뜻깊은 일이라고 확신합니다. 오르간은 모국
          동포들에겐 그들과 모국 땅을 사랑하고 기억하는 우리들의 기꺼운 기념품이
          될 것입니다. 그리고 조국 동포들께서는 저희를 사랑해주고 감사하는
          마음을 가지게 되는 계기가 될 것입니다.
        </Text>
        <StarIcon src={starIcon} />
        <Text>
          해당 글귀는 김란사가 안창호에게 보낸 서신 중 일부를 발췌한 것이다.
          김란사는 1916년 미국으로 건너가 2년여간 전역을 돌며 동포들에게 고국에
          파이프오르간을 보내기 위한 모금을 호소했다. 파이프오르간 설치는 외국의
          힘을 빌리지 않고 오직 한국의 힘만으로 이룩했다는 점에서 의의를 가지며,
          여기에서 김란사의 의지를 엿볼 수 있다. <br /> 파이프오르간의 송풍구는
          사람이 한두 명 정도 들어갈 수 있을 만큼 컸기 때문에, 3.1운동 당시
          이곳에서 전국의 만세운동 소식을 담은 ‘독립신문’이 인쇄되는 등
          독집운동의 아지트로 활용되기도 하였다.
        </Text>
        <Space height={"100px"} />
        <GoHomeSection>
          <GoHomeText onClick={onClickNavigate}>독립운동가 더보기</GoHomeText>{" "}
          <ArrowIcon src={arrowIcon} />
        </GoHomeSection>
        <Space height={"100px"} />
      </LastCaptionMessageContainer>
    </LastCaptionSection>
  );
}

const LastCaptionSection = styled.section`
  width: 100%;
  position: relative;
`;

const LastCaptionMessageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 100px;
  display: flex;
  width: 730px;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ArrowIcon = styled.img`
  width: 13px;
`;
const Text = styled.div`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const GoHomeSection = styled.div`
  display: flex;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 30px;
  align-items: center;
  gap: 7px;
`;

const GoHomeText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const StarIcon = styled.img`
  width: 14px;
`;

export default LastCaptionMessage;
