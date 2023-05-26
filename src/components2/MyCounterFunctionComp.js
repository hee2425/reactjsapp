import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCounterFunctionComp(props) {
  //Hook : useState(), useEffect, useCallback()
  //Top-level에서만 가능 : 컴포넌트 바로 밑
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Function 컴포넌트 이용 Counter임");
  const handleClick = (event) => {
    //일반함수에서는 Hook불가...const [count2, setCount2] = useState(0);
    var btnContent = event.target.innerHTML;
    setMessage(btnContent);
    if (btnContent === "증가") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <hr />
      <h2>count : {count}</h2>
      <h2>message : {message}</h2>
      <Button variant="outline-primary" onClick={handleClick}>
        증가
      </Button>
      <Button variant="outline-danger" onClick={handleClick}>
        감소
      </Button>
      <Button variant="outline-success" onClick={() => setCount(count + 1)}>
        증가
      </Button>
      <Button variant="outline-info" onClick={() => setCount(count - 1)}>
        감소
      </Button>
    </div>
  );
}

export default MyCounterFunctionComp;
