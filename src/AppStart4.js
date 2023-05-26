// import BoardListComponent from "components2/BoardListComponent";
// import FunctionComponent2 from "components2/FunctionComponent2";
// import MemberComponent from "components2/MemberComponent";
// import MyCounter from "components2/MyCounter";
// import MyCounterFunctionComp from "components2/MyCounterFunctionComp";
// import MyStayleChangeComp from "components2/MyStayleChangeComp";
//import React, { useState } from "react";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StateTest from "components3/StateTest";
import SmartHome from "components3/SmartHome";
//import { MyTimer } from "components2/MyTimer";
//import { ClassComp1 } from "components2/ClassComponent1";
// import FunctionComponentLifeCycle from "components2/FunctionComponentLifeCycle";

function AppStart4(props) {
  //const [showYN, setShowYN] = useState(true);
  useEffect(() => {
    console.log("!!!!!AppStart4....load시마다");
  });
  return (
    <div>
      <SmartHome />
      <StateTest />
      {/* <MyCounter />
      <MyCounterFunctionComp />
      <MyStayleChangeComp />
      <MemberComponent />
      <FunctionComponent2 />
      <BoardListComponent /> */}
      {/* <ClassComp1 /> */}
      {/* <FunctionComponentLifeCycle /> */}

      {/* {showYN && <MyTimer />} */}

      {/* <button
        onClick={() => {
          setShowYN(!showYN);
        }}
      >
        Timer시작 또는 중지
      </button> */}
    </div>
  );
}

export default AppStart4;
