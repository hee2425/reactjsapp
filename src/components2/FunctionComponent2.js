import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function FunctionComponent2(props) {
  const [userName, setUserName] = useState("홍길동");
  const [message, setMessage] = useState("반갑습니다.");
  var handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleClear = (e) => {
    setUserName("");
    setMessage("");
  };
  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState(["바나나", "오렌지"]);
  var handleFruitAdd = (e) => {
    setFruit(e.target.value);
  };
  var handleCartAppend = (e) => {
    setFruitList([...fruitList, fruit]);   //...fruitList : 기존에 있는 fruitList유지 하고 추가
  };

  return (
    <div>
      <h1>userName : {userName}</h1>
      <h1>message : {message}</h1>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="메세지를 입력하세요"
        onChange={handleMessageChange}
      />
      <Button variant="outline-secondary" onClick={handleClear}>
        삭제
      </Button>
      <hr />
      <br />
      <input onChange={handleFruitAdd} />
      <Button variant="outline-primary" onClick={handleCartAppend}>
        장바구니 추가
      </Button>
      <ul>
        {fruitList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FunctionComponent2;
