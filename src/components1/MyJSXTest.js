import React from "react";
import "components1/external.css";

function MyJSXTest(props) {
  const inlineStyle = {
    border: "3px dotted blue",
    color: "orange",
    fontSize: "30px",
  };

  const test1 = "react...jsx문법연습";
  const arr = [
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "JSP/Servlet",
    "Spring",
  ];
  const arrList = arr.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div>
      <h1 className="mystyle2">{test1}</h1>
      <h1>{test1}</h1>
      <ul style={inlineStyle}>{arrList}</ul>
      <ul>{arrList}</ul>
      <hr />
      <ul
        style={{ border: "3px dotted green", color: "pink", fontSize: "30px" }}
      >
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
          // 코드에 의해서 배열의 변경이 생길 경우 키가 없다면 모두 뒤져야하므로 속도 느려짐
          // 키는 리액트가 관리하는 키로 랜더링할때 사용함
        ))}
      </ul>
    </div>
  );
}

export default MyJSXTest;
