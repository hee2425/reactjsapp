//webboard 여러건 table로 보여주기...Component로 만들기
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function WebBoardList(props) {
  const arr1 = {
    bno: 1,
    title: "게시글1",
    contents: "내용1",
    writer: "히히1",
  };
  const arr2 = {
    bno: 2,
    title: "게시글2",
    contents: "내용2",
    writer: "히히2",
  };
  const arr3 = {
    bno: 3,
    title: "게시글3",
    contents: "내용3",
    writer: "히히3",
  };
  const all_arr = [arr1, arr2, arr3];
  return (
    <div>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <table style={{ border: "3px solid" }}>
        <thead style={{ backgroundColor: "lightcoral" }}>
          <tr>
            <th>bno</th>
            <th>title</th>
            <th>contents</th>
            <th>writer</th>
          </tr>
        </thead>
        <tbody>
          {all_arr.map((item, index) => (
            <tr key={index}>
              <td>{item.bno}</td>
              <td>{item.title}</td>
              <td>{item.contents}</td>
              <td>{item.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WebBoardList;
