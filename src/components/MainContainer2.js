import React from "react";
import styled from "styled-components";
// 모아보기
function MainContainer2() {
  return (
    <FlexBox>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
      <Box>
        <ImageBox />
        <div className="name">김지섭 의사</div>
      </Box>
    </FlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
  gap: 36px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
const ImageBox = styled.div`
  width: 267px;
  height: 267px;
  background-color: gray;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  .name {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;
export default MainContainer2;
