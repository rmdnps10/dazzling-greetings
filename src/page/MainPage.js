import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Intro from "../components/Intro";
import Header from "../components/Header";
import MainContainer1 from "../components/MainContainer1";
import 모아보기사진 from "../assets/images/모아보기.svg";
import 펼쳐보기사진 from "../assets/images/펼쳐보기.svg";
import MainContainer2 from "../components/MainContainer2";

function MainPage() {
  const [isShowIntro, setIsShowIntro] = useState(true);
  const [펼쳐보기선택여부, set펼쳐보기] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowIntro(false);
    }, 1000);
  }, []);
  return (
    <MainPageContainer>
      {isShowIntro ? (
        <Intro isShow={isShowIntro} />
      ) : (
        <>
          <Header />
          {펼쳐보기선택여부 ? <MainContainer1 /> : <MainContainer2 />}
          <ButtonWrapper>
            <Button
              onClick={() => {
                set펼쳐보기(true);
              }}
              isSelcted={펼쳐보기선택여부}
            >
              <ButtonImg src={펼쳐보기사진} />
              <ButtonText>펼쳐보기</ButtonText>
            </Button>
            <Button
              isSelcted={!펼쳐보기선택여부}
              onClick={() => {
                set펼쳐보기(false);
              }}
            >
              <ButtonImg src={모아보기사진} />
              <ButtonText>모아보기</ButtonText>
            </Button>
          </ButtonWrapper>
        </>
      )}
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  background: linear-gradient(180deg, #000 0%, #3d332e 100%);
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
  gap: 36px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  opacity: ${(props) => (props.isSelcted ? "0.5" : "0.25")};
`;

const ButtonText = styled.div`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const ButtonImg = styled.img`
  height: 17px;
`;
export default MainPage;
