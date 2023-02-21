import React from "react";
import "./MainLayout.css";

// Styled-components 임포트
import styled, { css, keyframes } from "styled-components";

const MainLayout = props => {
  return (
    <div className="MainLayout">
      <div className="MainLayout_foodSection">
        <div className="MainLayout_foodPicture">
          <img
            className="MainLayout_picture"
            src={props.foodPicture}
            alt="Cat or Food"
          ></img>
        </div>
      </div>

      <div className="MainLayout_mainMenuSection">
        <h4>{props.mainMenu}</h4>
      </div>

      <div className="MainLayout_descriptionSection">
        <div className="MainLayout_description">
          <StyledH3 typingEffect={props.typingEffect}>
            {props.description1}
          </StyledH3>
          <h3 className="MainLayout_description2">{props.description2}</h3>
          <h1 className="MainLayout_foodName">{props.foodName}</h1>
        </div>
      </div>
    </div>
  );
};

// default props 설정
MainLayout.defaltProp = {
  foodPicture: "",
  description1: "",
  description2: "",
  foodName: "",
  mainMenu: "",
  typingEffect: true
};

/* styled-components 사용 */
const typingAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 60vw;
  }
`;

const StyledH3 = styled.h3`
  position: relative;
  display: inline-block;
  height: 4.5vmax;
  overflow: hidden;

  ${props => {
    if (props.typingEffect) {
      return css`
        animation: ${typingAnimation} 3.5s steps(22, end) 1;
      `;
    }
  }}
`;

export default MainLayout;
