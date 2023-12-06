import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import example1 from "../assets/images/kim.png";
import example2 from "../assets/images/gooksa.png";
// 펼쳐보기
function MainContainer1() {
  const sliderRef = useRef();
  // 스크롤 이동
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 1000;
    }
  }, []);
  return (
    <>
      {" "}
      <SliderBox ref={sliderRef}>
        <OverflowBox>
          <TopBox1>
            <div className="name">김란사 지사</div>
          </TopBox1>
          <BottomBox1 image1={example1} image2={example2}>
            <div className="name">이관술 지사</div>
          </BottomBox1>
          <TopBox2>
            <div className="name">이연호 지사</div>
          </TopBox2>
          <BottomBox2>
            <div className="name">이육사 지사</div>
          </BottomBox2>
          <TopBox3>
            <div className="name">심훈 지사</div>
          </TopBox3>
          <BottomBox3>
            <div className="name">안창호 지사</div>
          </BottomBox3>
          <TopBox4>
            <div className="name"></div>
          </TopBox4>
          <BottomBox4>
            <div className="name"></div>
          </BottomBox4>
          <TopBox4>
            <div className="name"></div>
          </TopBox4>
          <BottomBox4>
            <div className="name"></div>
          </BottomBox4>
        </OverflowBox>
      </SliderBox>
    </>
  );
}
const SliderBox = styled.div`
  width: 100%;
  overflow: scroll;
  height: 572px;
  padding-top: 200px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const OverflowBox = styled.div`
  width: 2000px;
  display: flex;
  height: 572px;
  gap: 40px;
`;

const TopBox1 = styled.div`
  background-color: gray;
  // 박스크기임밑에
  width: 225px;
  height: 444px;
  flex-shrink: 0;
  align-self: flex-start;
  position: relative;
  .name {
    position: absolute;
    bottom: -24px;
    left: 0px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
`;
const TopBox2 = styled(TopBox1)``;
const TopBox3 = styled(TopBox1)``;
const TopBox4 = styled(TopBox1)``;

const BottomBox1 = styled(TopBox1)`
  align-self: flex-end;
  position: relative;
  background-image: url(${(props) => props.image1});
  background-position: 50% 50%;
  background-size: 120%;
  transition: 1s;
  .name {
    position: absolute;
    top: -24px;
    left: 0px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
  &:hover {
    background-image: url(${(props) => props.image2});
    background-position: 50% 50%;
    background-size: 150%;
  }
`;
const BottomBox2 = styled(BottomBox1)``;
const BottomBox3 = styled(BottomBox1)``;
const BottomBox4 = styled(BottomBox1)``;

export default MainContainer1;
