import React from "react";
import styled from "styled-components";
import starLogo from "../assets/images/starLogo.svg";
import mainLogo from "../assets/images/main.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onClickNavigateAbout = () => {
    navigate("/about");
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <MainLogo src={mainLogo} />
        </Link>
        <StarImage src={starLogo} onClick={onClickNavigateAbout} />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const StarImage = styled.img`
  width: 24px;
  padding-bottom: 20px;
  cursor: pointer;
  margin-left: auto;
`;
const MainLogo = styled.img`
  width: 141px;
  cursor: pointer;
  margin-top: 34px;
`;

export default Header;
