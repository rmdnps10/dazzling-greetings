import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Space from "../components/Space";
import busan from "../assets/images/busan.svg";
import dokrip from "../assets/images/dokrip.svg";
import dangjin from "../assets/images/dangjin.svg";
import yeongtak from "../assets/images/yeongtaek.svg";
import gookasa from "../assets/images/gooksa.png";
import kimuki from "../assets/images/kimuki.svg";
import Video from "../assets/video/kimlansa.mp4";
function AboutPage() {
  return (
    <AboutPageConainer>
      <Header />
      <Space height={"200px"} />
      <h1>눈부신 안부</h1>
      <h3>Face2Speech AI 기반 독립운동가 목소리 추정 프로젝트</h3>
      <p>
        독립운동가는 현세대가 살아가는 대한민국 자유정신의 뿌리로서, 그들의 삶과
        정신을 기억하는 것은 그 자체로 매우 중요하다. 지금까지 우리는 독립운동가
        개개인의 주체적 삶보다는 국가적 관점에서의 희생, 고통, 수모에 주목하곤
        했다. 또한 몇몇의 잘 알려진 독립운동가를 제외하고는, 대다수의
        독립운동가는 수형 기록표에 기재된 이름, 죄명, 사진 등 데이터로서
        남겨지고 있다. <br /> 눈부신 안부에서는 독립운동가 개개인이 주체적 삶의
        존재로서 기억되고 주목 받을 수 있는 방식을 연구한다. 수형 기록표 혹은
        일제 주요감시대상 인물카드 속 작은 사진으로 남아 우리가 잘 주목하지 못한
        독립운동가의 주체성을, 그들의 목소리를 찾아 주는 방식으로 회복하고자
        한다. 이로써 현-미래 세대가 독립운동가를 적극적으로 목소 리 내던 주체,
        개인의 존엄한 삶을 잃지 않고자 노력했던 역사적 인물로서 기억하는데
        기여하고자 한다.
      </p>
      <Space height={"146px"} />
      <h2>프로젝트 티저 영상</h2>
      <Space height={"59px"} />
      <VideoSection>
        <video width="1112" height="626" controls="controls">
          <source src={Video} type="video/mp4" />
        </video>
      </VideoSection>
      <Space height={"215px"} />
      <h2>자료 제공</h2>
      <Space height={"66px"} />
      <div className="flex">
        <img
          className="e"
          src={
            "https://museum.busan.go.kr/humanframe/theme/museum_busan/assets/img/common/logo_museum_busan.png"
          }
        />
        <img className="a" src={dangjin} />
        <img className="b" src={gookasa} />
        <img className="c" src={dokrip} />
        <img className="d" src={yeongtak} />
      </div>
      <Space height={"266px"} />
      <h2>후원</h2>
      <Space height={"67px"} />
      <div className="flex2">
        <img src={kimuki} className="f" />
      </div>
      <Space height={"262px"} />
    </AboutPageConainer>
  );
}

const VideoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const AboutPageConainer = styled.div`
  background-color: black;
  h1 {
    color: #fff;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h2 {
    color: #fff;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    line-height: normal;
  }
  h3 {
    margin-top: 22px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  img.f {
    margin-left: 300px;
  }
  .flex {
    width: 1000px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 100px;
    display: flex;
    .e {
      width: 301px;
    }
    .a {
      width: 200px;
    }
    .b {
      width: 280px;
      height: 63px;
    }
    .c {
      width: 282px;
    }
    .d {
      width: 300px;
    }
  }

  .video-section {
    width: 1200px;
    margin 0 auto;l
  }

  p {
    width: 1040px;
    margin: 0 auto;
    margin-top: 76px;
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 166.667% */
  }
`;
export default AboutPage;
