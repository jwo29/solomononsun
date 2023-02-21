import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import LoadingScreen from "./LoadingScreen";

// styled-components 임포트
import styled, { css, keyframes } from "styled-components";

// html2canvas 임포트(화면 캡처)
import html2canvas from "html2canvas";

// 판결 화면 구성 컴포넌트(MainLayout) 임포트
import MainLayout from "../Component/MainLayout";
// 음식점 정보 컴포넌트(Restaurant) 임포트
import restaurant from "../Component/Restaurant";

import foodCat0First from "../Picture/foodCat0First.png";
import foodCat0Second from "../Picture/foodCat0Second.png";
import foodCat1First from "../Picture/foodCat1First.png";
import foodCat1Second from "../Picture/foodCat1Second.png";
import foodCat2First from "../Picture/foodCat2First.png";
import foodCat2Second from "../Picture/foodCat2Second.png";

const foodCat = [
  { first: foodCat0First, second: foodCat0Second },
  { first: foodCat1First, second: foodCat1Second },
  { first: foodCat2First, second: foodCat2Second }
];

// 판결 대사
const descriptionComment = [
  {
    // 첫 번째 판결 대사
    comment1: "냥냥법 제 3장에 의거 !!",
    comment2: "너의 점심은..."
  },
  {
    // 두 번째 판결 대사
    comment1: "으음.. 꽤 고집이 세네...",
    comment2: "그럼 이건 어때?"
  },
  {
    // 세 번째 판결 대사
    comment1: "우씨! 이번이 마지막이다!",
    comment2: "그냥 이거로 먹어!!"
  }
];

// 랜덤 인덱스 값 생성 함수
const foodRandomIndex = () => {
  return Math.floor(Math.random() * restaurant.length);
};

const SecondScreen = () => {
  let imgLoading = 0;
  // 이미지 preLoading state
  const [loading, setLoading] = useState(false);

  // 항소 횟수 state
  const [count, setCount] = useState(0);
  // 랜덤 인덱스 값 state
  let [index, setIndex] = useState(foodRandomIndex());

  // 사진 state (고양이1 -> 고양이2 -> 음식점)
  const [foodPicture, setFoodPicture] = useState("");
  // 음식이름 state
  const [foodName, setFoodName] = useState("");
  // 판결 대사 첫 마디 state
  const [description1, setDescription1] = useState("");
  // 판결 대사 두 번째 마디 state
  const [description2, setDescription2] = useState("");
  // 메인 메뉴 state
  const [mainMenu, setMainMenu] = useState("");

  // 애니메이션 효과(fade_in, typing) state
  const [animationEffect, setAnimationEffect] = useState(true);
  // 버튼 명 state (항소 -> 상고)
  const [buttonName, setButtonName] = useState("항소");
  // 버튼 숨김 조절 state
  const [buttonHidden, setButtonHidden] = useState("");

  /* 카톡 인엡 브라우저에서 실행 안되는 문제로 deprecated */
  // 결과 캡처 버튼 이벤트 함수
  const captureButtonClick = () => {
    html2canvas(document.querySelector("#root"), {
      allowTaint: true,
      useCORS: true
    }).then(canvas => {
      let download = document.getElementById("captureDownload");
      download.href = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      download.download = "점심 판결 결과.png";
      download.click();
    });
  };

  // 카톡 공유 버튼 이벤트 함수
  const kakaoButtonClick = () => {
    document.getElementById("kakao-link-btn").click();
  };

  // 다시 하기 버튼 이벤트 함수
  const againButtonClick = () => {
    window.location.reload();
  };

  // 항소(상고) 하기 버튼 이벤트 함수
  const appealButtonClick = () => {
    setCount(count + 1);
    restaurant.splice(index, 1);
    setIndex(foodRandomIndex());
    imgLoading = 0;
  };

  // Hooks로 LifeCycle 구현
  useEffect(
    () => {
      setLoading(false);

      // 이미지 preLoading
      let preLoad1 = new Image();
      preLoad1.src = foodCat[count].first;
      preLoad1.onload = function() {
        imgLoading++;
      };
      let preLoad2 = new Image();
      preLoad2.src = foodCat[count].second;
      preLoad2.onload = function() {
        imgLoading++;
      };
      let preLoad3 = new Image();
      preLoad3.src = restaurant[index].logo;
      preLoad3.onload = function() {
        imgLoading++;
      };

      setInterval(() => {
        if (imgLoading === 3) {
          setLoading(true);
        }
      }, 100);
      setFoodPicture(foodCat[count].first);
      setDescription1(descriptionComment[count].comment1);
      setDescription2("");
      setFoodName("");
      setMainMenu("");
      setAnimationEffect(true);
      setButtonHidden("none");

      if (count === 1) {
        setButtonName("상고");
      }

      setTimeout(() => {
        setFoodPicture(foodCat[count].second);
        setDescription2(descriptionComment[count].comment2);
      }, 6000);

      setTimeout(() => {
        setFoodPicture(restaurant[index].logo);
        setFoodName(restaurant[index].name);
        setMainMenu(restaurant[index].mainMenu);
      }, 8500);

      setTimeout(() => {
        setButtonHidden("");
        setAnimationEffect(false);
      }, 9000);
    },
    [count, index] // LifeCycle 의존 값(count, index) 명시
  );

  if (loading === false) {
    return <LoadingScreen index={count} />;
  } else {
    // 재 판결 가능할 경우
    if (count < 2) {
      return (
        <SecondScreenLayout fade_inEffect={animationEffect}>
          <a id="captureDownload"></a>
          <StyledMainLayout
            id="capture"
            foodPicture={foodPicture}
            description1={description1}
            description2={description2}
            foodName={foodName}
            mainMenu={mainMenu}
            typingEffect={animationEffect}
          />

          <ButtonSection>
            {/* 카톡 인엡 브라우저에서 실행 안되는 문제로 deprecated */}
            <StyledButton
              variant="success"
              onClick={() => captureButtonClick()}
              hidden={buttonHidden}
              style={{ display: "none" }}
            >
              결과 캡처
            </StyledButton>
            <StyledButton
              variant="warning"
              onClick={() => kakaoButtonClick()}
              hidden={buttonHidden}
            >
              카톡 공유
            </StyledButton>
            <StyledButton
              variant="danger"
              onClick={() => appealButtonClick()}
              hidden={buttonHidden}
            >
              {buttonName} 신청
            </StyledButton>
          </ButtonSection>
        </SecondScreenLayout>
      );
    }
    // 마지막 판결일 경우
    else {
      return (
        <SecondScreenLayout fade_inEffect={animationEffect}>
          <a id="captureDownload"></a>
          <StyledMainLayout
            id="capture"
            foodPicture={foodPicture}
            description1={description1}
            description2={description2}
            foodName={foodName}
            mainMenu={mainMenu}
            typingEffect={animationEffect}
          />

          <ButtonSection>
            {/* 카톡 인엡 브라우저에서 실행 안되는 문제로 deprecated */}
            <StyledButton
              variant="success"
              onClick={() => captureButtonClick()}
              hidden={buttonHidden}
              style={{ display: "none" }}
            >
              결과 캡처
            </StyledButton>
            <StyledButton
              variant="warning"
              onClick={() => kakaoButtonClick()}
              hidden={buttonHidden}
            >
              카톡 공유
            </StyledButton>
            <StyledButton
              variant="primary"
              onClick={() => againButtonClick()}
              hidden={buttonHidden}
            >
              다시 하기
            </StyledButton>
          </ButtonSection>
        </SecondScreenLayout>
      );
    }
  }
};

/* styled-components 사용 */
const fade_inAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SecondScreenLayout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;

  ${props => {
    if (props.fade_inEffect) {
      return css`
        animation: ${fade_inAnimation} 5s;
      `;
    }
  }}
`;

const StyledMainLayout = styled(MainLayout)`
  height: 87%;
`;
const ButtonSection = styled.div`
  height: 13%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
display:${props => props.hidden || ""}
  height: 7vh;
  border-radius: 1rem;
  font-size: 3vmax;
`;

export default SecondScreen;
