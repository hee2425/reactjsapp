import React, { useEffect, useState } from "react";

function FunctionComponentLifeCycle(props) {
  const [fruit, setFruit] = useState("");
  const [board, setBoard] = useState("");

  console.log("******");

  //   useEffect연습
  useEffect(() => {
    console.log("랜더링될때 마다 실행된다.");
  });
  useEffect(() => {
    console.log("최초 마운트시 실행!!");
  }, []); //[] : 의존배열, 의존배열에 아무것도 없으면 최초 마운트시 한번만 실행
  useEffect(() => {
    console.log("최초 마운트시 실행, fruit가 변경 될때 마다 실행된다.");
    return () => {
      console.log("지워질때 어떤 작업을 할것인지 작성");
    };
  }, [fruit]);
  useEffect(() => {
    console.log(
      "최초 마운트시 실행, fruit또는 board가 변경 될때 마다 실행된다."
    );
  }, [fruit, board]);

  const handleChange = (e) => {
    setFruit(e.target.value);
  };

  const handleChange2 = (e) => {
    setBoard(e.target.value);
  };
  return (
    <div>
      <h1>
        Function컴포넌트 라이프 사이클 연습하기 :{fruit}...{board}
      </h1>
      <input onChange={handleChange} />
      <input onChange={handleChange2} />
    </div>
  );
}

export default FunctionComponentLifeCycle;
