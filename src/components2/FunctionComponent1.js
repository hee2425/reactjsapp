import React from "react";

var score1 = 100;
const score2 = 200;

const FunctionComp1 = (args) => {
  //JSX : root1개, tag열기, 닫기, 계층 구조
  //조건부 연산 A&&B=> A가 참이면 B수행, A가 거짓이면 B수행X
  return (
    <div style={{color:args.color}}>
      <h1>FunctionComp1</h1>
      <p>1.title : {args.title}</p>
      <p>2.contents : {args.contents}</p>
      <p>3.children : {args.children}</p>
      <p>4.price : {args.price}</p>
      <ul>
        {args.subject &&
          args.subject.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

//비구조화할당
function FunctionComp2({ title, contents, price, children, subject , color}) {
  return (
    <div style={{color: color}}>
      <h1>FunctionComp2</h1>
      <p>1.title : {title}</p>
      <p>2.contents : {contents}</p>
      <p>3.children : {children}</p>
      <p>4.price : {price}</p>
      <ul>
        {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export { score1, score2, FunctionComp1, FunctionComp2 as default };
