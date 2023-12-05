import React, { useEffect, useRef, useState } from "react";
import DetailIntro from "../components/DetailIntro";
import Header from "../components/Header";
import styled from "styled-components";
import background from "../assets/images/background.svg";
import 김란사 from "../assets/images/kim.png";
import DetailSelector from "../components/DetailSelector";
import CaptionMessage from "../components/CaptionMessage";
import Space from "../components/Space";
import LastCaptionMessage from "../components/LastCaptionMessage";
import Footer from "../components/Footer";
function DetailPage() {
  const [isShowFirstIntro, setIsShowFirstIntro] = useState(true);
  const [isShowSelector, setIsShowSelector] = useState(true);
  const [bright, setBright] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });
  const scrollRef = useRef();
  const scrollRef2 = useRef();
  // 인트로 보여주고 음성재성되야하는데, 음성재생시작하면 스크롤 가능하게 바꿔주기 ㅇㅇ
  useEffect(() => {
    setTimeout(() => {
      setIsShowFirstIntro(false);
    }, 3000);
  }, []);
  const handleScroll = () => {
    const scroll = scrollRef.current.scrollTop;
    console.log(scroll);
    const 나중추가영역 = 0;
    setIsShowSelector(true);
    if (scroll < 나중추가영역 + 600) {
      setBright({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
      });
    } else if (scroll < 나중추가영역 + 1600) {
      setBright({
        first: true,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
      });
    } else if (scroll < 나중추가영역 + 3500) {
      setBright({
        first: false,
        second: true,
        third: false,
        fourth: false,
        fifth: false,
      });
    } else if (scroll < 나중추가영역 + 5400) {
      setBright({
        first: false,
        second: false,
        third: true,
        fourth: false,
        fifth: false,
      });
    } else if (scroll < 나중추가영역 + 7300) {
      setBright({
        first: false,
        second: false,
        third: false,
        fourth: true,
        fifth: false,
      });
    } else if (scroll < 나중추가영역 + 9900) {
      setBright({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: true,
      });
    } else {
      setIsShowSelector(false);
    }
  };
  const moveScroll = (scroll) => {
    if (scrollRef.current == null) {
      return;
    }
    scrollRef.current.scrollLeft = scroll;
  };

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 이벤트 리스너 등록
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isShowFirstIntro]);

  return (
    <>
      {isShowFirstIntro ? (
        <DetailIntro />
      ) : (
        <>
          <Header />
          <Backgroundfix image={background} ref={scrollRef}>
            <DetailSelector
              bright={bright}
              isShow={isShowSelector}
              moveScroll={moveScroll}
            />
            <BackgroundImageStickyBox>
              <BackgroundImage src={김란사} />
              <FirstCaptionStickyBox>
                <Space height={"100px"} />
                <CaptionMessage
                  title={"이화학당 입학"}
                  content={
                    "1894년 이화학당에 입학을 요청했으나, 당시 이화학당에는 금혼 학칙이 있었기 때문에 제4대 교장인 룰루 프라이는 기혼자 김란사의 입학 요청을 거절했다. 이에 김란사는 하인이 들고 있던 등불을 입으로 불어 끄며 “우리가 캄캄하기를 이 등불 꺼진 것과 같습니다. 어머니들이 무언가 배우고 알아야 자식을 가르칠 수 있지 않겠습니까” 라고 말했고, 이에 감명받은 프라이 교장은 김란사의 입학을 허가하였다. "
                  }
                />
              </FirstCaptionStickyBox>
              <Space height={"500px"} />
              <SecondCaptionStickyBox>
                <CaptionMessage
                  title={"우리나라 최초의 여성 대학 교수"}
                  content={
                    "1898년부터 워싱턴 D.C.의 하워드 대학교에서 2년간 공부하고, 1900년 오하이오 웨슬리언 대학교에 입학하여 1906년 문학사 학위를 취득하였는데, 이는 한국 여성으로는 최초였다."
                  }
                />
              </SecondCaptionStickyBox>
              <Space height={"500px"} />
              <ThirdCaptionStickyBox>
                {" "}
                <CaptionMessage
                  title={"이문회 지도교사"}
                  content={
                    "귀국하여 모교인 이화학당에 교사로 부임하여 영어와 성경 등을 가르쳤고, 총학사를 역임하기도 했다. 제자 중에는 유관순이 있으며, 유관순이 가담해 활동한 학생자치단체 이문회(以文會)를 이끌며 민족의식을 고취하였다."
                  }
                />
              </ThirdCaptionStickyBox>
              <Space height={"500px"} />
              <FourthCaptionStickyBox ref={scrollRef2}>
                <CaptionMessage
                  title={"파이프오르간 설치"}
                  content={
                    "1916년 미국 뉴욕에서 열린 세계감리회총회에 한국 평신도 대표로 참석한 김란사는 2년간 미국에 머물며 신학을 공부하는 한편 미국 전역을 돌며 동포들의 단결심과 애국심을 고취하고 독립자금 모금을 호소했다. 김란사는 성금을 모아 1918년 한국 최초로 정동교회에 파이프오르간을 설치했다. 이 파이프오르간의 지하 송풍실은 이듬해 기미독립선언서와 독립신문을 찍어내는 아지트가 되었다."
                  }
                />
              </FourthCaptionStickyBox>
            </BackgroundImageStickyBox>
            <LastCaptionMessage />
          </Backgroundfix>
          <Footer />
        </>
      )}
    </>
  );
}

const Backgroundfix = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  // 배경 사이즈, 위치 조절.
  background: url(${background});
  background-size: 130%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  overflow: scroll;
`;

const BackgroundImageStickyBox = styled.div`
  height: 8500px;
`;

const BackgroundImage = styled.img`
  position: sticky;
  z-index: 3;
  top: 150px;
  left: 380px;
  width: 700px;
  scale: 1;
`;

const FirstCaptionStickyBox = styled.div`
  height: 1500px;
`;
const SecondCaptionStickyBox = styled.div`
  height: 1500px;
`;

const ThirdCaptionStickyBox = styled.div`
  height: 1500px;
`;
const FourthCaptionStickyBox = styled.div`
  height: 1500px;
`;
const LastCaptionStickyBox = styled.div`
  height: 1500px;
`;
export default DetailPage;
