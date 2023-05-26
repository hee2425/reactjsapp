import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function MyStayleChangeComp(props) {
  const [color, setColor] = useState("black");
  const [mystyle, setMyStyle] = useState({
    color: "gray",
    border: "1px solid gray",
  });
  const handleColorChange = (event) => {
    var targetContent = event.target.innerHTML;
    setColor(targetContent);
    setMyStyle({
      color: targetContent,
      border: `1px solid ${targetContent}`,
    });
  };
  return (
    <div>
      <h1 style={mystyle}>색 변경하기</h1>
      <h2 style={{ color: color }}>색 변경하기2</h2>
      <h2 style={{ color }}>색 변경하기3</h2>
      <Button variant="danger" onClick={handleColorChange}>
        red
      </Button>
      <Button variant="success" onClick={handleColorChange}>
        green
      </Button>
      <Button variant="primary" onClick={handleColorChange}>
        blue
      </Button>
    </div>
  );
}

export default MyStayleChangeComp;
