import React from "react";
import { Button } from "react-bootstrap";
import "./FirstScreen.css";

import mainCat from "../Picture/mainCat.png";

const FirstScreen = props => {
  return (
    <div className="FirstScreen">
      {/* Desktop 환경 */}
      <div className="Desktop">
        <div>
          <div className="Desktop_section1">
            <img className="Desktop_picture" src={mainCat} alt="Cat"></img>
          </div>
        </div>
        <div>
          <div className="Desktop_section2">
            <div className="Desktop_section2_header">
              <h2>상명대학교</h2>
              <h4>소프트웨어 X 디지털콘텐츠 X 시각디자인</h4>
              <h6>정민찬 이지우 JISU 이수진</h6>
            </div>
            <div className="Desktop_section2_body">
              <div className="Desktop_body_title">
                <div className="Desktop_body_title_description1">
                  <h3>솔로몬</h3>
                  <h1>온순이</h1>
                  <h3>의</h3>
                </div>
                <div className="Desktop_body_title_description2">
                  <h1>점심 판결</h1>
                </div>
                <div className="Desktop_body_title_description3">
                  <h6>※ 데스크톱 환경은 지원하지 않습니다.</h6>
                </div>
              </div>
            </div>
            <div className="Desktop_section2_footer">
              <Button
                className="Desktop_button"
                variant="secondary"
                block
                disabled="true"
              >
                하고 싶으면 모바일로 와라 냥!
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile 환경 */}
      <div className="FirstScreen_header">
        <h6>상명대학교</h6>
        <h6>소프트웨어 X 디지털콘텐츠 X 시각디자인</h6>
        <h6>정민찬 이지우 JISU 이수진</h6>
      </div>
      <div className="FirstScreen_body">
        <div className="FirstScreen_body_background">
          <div className="FirstScreen_body_title">
            <h3>솔로몬</h3>
            <div className="FirstScreen_body_title_inline">
              <h5>온순이</h5>
              <h3 style={{ paddingBottom: "3px" }}>의</h3>
            </div>
            <h3>점심 판결</h3>
          </div>
          <div className="FirstScreen_body_picture">
            <img className="FirstScreen_picture" src={mainCat} alt="Cat"></img>
          </div>
        </div>
      </div>
      <div className="FirstScreen_footer">
        <Button
          className="FirstScreen_button_start"
          variant="danger"
          block
          onClick={() => props.setFinishFirst(true)}
        >
          판결 신청
        </Button>
      </div>
    </div>
  );
};

export default FirstScreen;
