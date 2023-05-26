//import { func } from "prop-types";
import React, { useState } from "react";
import { Button, Table, InputGroup, Form, Stack } from "react-bootstrap";
const defaultBoard = {
  bno: "",
  title: "",
  content: "",
  writer: "",
};
const inputTitleWidth = { width: "5rem" };

function Boardlist() {
  const [board, setBoard] = useState(defaultBoard);
  const [boardlist, setBoardlist] = useState([]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
    console.log("input", board);
  };
  const add = () => {
    const { bno, title, content, writer } = board;
    if (bno && title && content && writer) {
      setBoardlist([...boardlist, board]);
      setBoard(defaultBoard);
      console.log("add", boardlist);
    }
  };

  const add2 = (e) => {
    var board = {};
    board.bno = document.querySelector("[name='bno']").value;
    board.title = document.querySelector("[name='title']").value;
    board.title = document.querySelector("[name='title']").value;
    board.content = document.querySelector("[name='content']").value;
    board.writer = document.querySelector("[name='writer']").value;
    setBoardlist([...boardlist, board]);
  };

  return (
    <div style={{ display: "flex" }}>
      <Stack className="col-md-1 mx-auto">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={inputTitleWidth}>
            bno
          </InputGroup.Text>
          <Form.Control
            placeholder="bno 입력해주세요"
            aria-label="bno"
            aria-describedby="basic-addon1"
            onChange={inputChange}
            name="bno"
            value={board.bno}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={inputTitleWidth}>
            title
          </InputGroup.Text>
          <Form.Control
            placeholder="title 입력해주세요"
            aria-label="title"
            aria-describedby="basic-addon1"
            onChange={inputChange}
            name="title"
            value={board.title}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={inputTitleWidth}>
            content
          </InputGroup.Text>
          <Form.Control
            placeholder="content 입력해주세요"
            aria-label="content"
            aria-describedby="basic-addon1"
            onChange={inputChange}
            name="content"
            value={board.content}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={inputTitleWidth}>
            writer
          </InputGroup.Text>
          <Form.Control
            placeholder="writer 입력해주세요"
            aria-label="writer"
            aria-describedby="basic-addon1"
            onChange={inputChange}
            name="writer"
            value={board.writer}
          />
        </InputGroup>
        <Button onClick={add}>등록</Button>
        <Button variant="outline-primary" onClick={add2}>
          등록2
        </Button>
      </Stack>
      <div style={{ width: "70%", marginLeft: "30px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>bno</th>
              <th>title</th>
              <th>content</th>
              <th>writer</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.length !== 0 &&
              boardlist.map((item, index) => (
                <TableRowComponent key={index} item={item} />
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

//따로 컴포넌트 빼기
function TableRowComponent({ item }) {
  return (
    <tr>
      <TableColumnComponent item={item.bno} />
      <TableColumnComponent item={item.title} />
      <TableColumnComponent item={item.content} />
      <TableColumnComponent item={item.writer} />
    </tr>
  );
}

function TableColumnComponent({ item }) {
  return <td>{item}</td>;
}

export default Boardlist;
