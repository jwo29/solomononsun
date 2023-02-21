import React, { useState, useEffect } from "react";
import FirstScreen from "./Screen/FirstScreen";
import LoadingScreen from "./Screen/LoadingScreen";
import SecondScreen from "./Screen/SecondScreen";

import mainCat from "./Picture/mainCat.png";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [finishFirst, setFinishFirst] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // 이미지 preLoading
    let preLoad = new Image();
    preLoad.src = mainCat;
    preLoad.onload = function() {
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen situation={finishFirst} />;
  } else if (isLoading === false && finishFirst === false) {
    return <FirstScreen setFinishFirst={setFinishFirst} />;
  } else {
    return <SecondScreen />;
  }
};

export default App;
