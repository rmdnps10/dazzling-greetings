import React from "react";
import styled from "styled-components";
import { StarImage, WhiteText } from "./Intro";
import starLogo from "../assets/images/starLogo.svg";

function DetailIntro() {
  return (
    <DetailIntroContianer>
      <StarImage src={starLogo} />
      <WhiteText>
        모국 동포들에겐 그들과 모국 땅을 사랑하고 기억하는 우리들의 기꺼운
        기념품
        <br />이 될 것이며, 조국 동포들께서 저희를 사랑해주고 감사하는 마음을
        가지게 되<br />는 계기가 될 것입니다.
      </WhiteText>
    </DetailIntroContianer>
  );
}

const DetailIntroContianer = styled.div`
  background-color: black;
  //   display: ${(props) => (props.isShow ? "flex" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100vw;
  height: 100vh;
`;
export default DetailIntro;
