import React from "react";
import "./LoadingScreen.css";
import ReactLoading from "react-loading";

const LoadingScreen = props => {
  if (props.situation === false) {
    return (
      <div className="LoadingScreen">
        <ReactLoading
          className="loading"
          type={"spinningBubbles"}
          color="#000000"
        />
        <h2>Loading</h2>
      </div>
    );
  } else if (props.index === 0) {
    return (
      <div className="LoadingScreen">
        <ReactLoading
          className="loading"
          type={"spinningBubbles"}
          color="#000000"
        />
        <h2>판결 중</h2>
      </div>
    );
  } else if (props.index === 1) {
    return (
      <div className="LoadingScreen">
        <ReactLoading
          className="loading"
          type={"spinningBubbles"}
          color="#000000"
        />
        <h2>항소 중</h2>
      </div>
    );
  } else if (props.index === 2) {
    return (
      <div className="LoadingScreen">
        <ReactLoading
          className="loading"
          type={"spinningBubbles"}
          color="#000000"
        />
        <h2>상고 중</h2>
      </div>
    );
  }
};

// default props 설정
LoadingScreen.defaultProps = {
  situation: true
};

export default LoadingScreen;
