import React from "react";
import { Header, HeaderF1 } from "./components1/MyHeader";
import MySection, { MySection2 } from "./components1/MySection";
import {
  MyNavigation,
  myscore,
  MyNavigation2,
} from "./components1/MyNavigation";

function App2(props) {
  console.log("myscore : " + myscore);
  var subject = "ReactJS배우기";

  console.log(true && "hello"); // hello
  console.log(false && "hello"); // false
  console.log("hello" && "bye"); // bye
  console.log(null && "hello"); // null
  console.log(undefined && "hello"); // undefined
  console.log("" && "hello"); // ''
  console.log(0 && "hello"); // 0
  console.log(1 && "hello"); // hello

  const score = 200;
  return (
    <div>
      {/* //3항 연산자 */}
      {score >= 100 ? <strong>{score}Good~~~</strong> : <i>{score} 노력!!!</i>}
      {/*  //조건부 렌더링 */}
      {score >= 100 && <strong>{score}Good~~~</strong>}
      <h1>{subject ? subject : "과목내용없음"}</h1>
      <h1>{subject && "앞의 결과가 참이면 뒤부분을 수행"}</h1>
      <p>{"나의 점수는" + myscore}</p>
      <p>{/* 여기 : {null} {false} {undefined} */}</p>
      <Header />
      <HeaderF1 />
      <MyNavigation />
      <MyNavigation2 />
      <MySection />
      <MySection2 />
    </div>
  );
}

export default App2;

//export default function aa(){}
//function aa(){} export{aa}
//function aa(){} export default aa
