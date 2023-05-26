import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BoardUpdate(props) {
  const location = useLocation();
  const [board, setBoard] = useState(location.state.boardData);
  const navi = useNavigate();

  const handleChange = (event) => {
    setBoard({ ...board, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    console.log(board);
  }, [board]);

  const handleSave = () => {
    axios({
      url: "/rest/webboard/modify.do",
      method: "put",
      data: board,
    })
      .then((responseData) => {
        console.log(responseData);
        navi("/board/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p>BoardUpdate</p>
      bno : <input value={board.bno} readOnly />
      <br />
      제목 : <input name="title" value={board.title} onChange={handleChange} />
      <br />
      내용 :{" "}
      <input name="content" value={board.content} onChange={handleChange} />
      <br />
      작성자 :{" "}
      <input name="writer" value={board.writer} onChange={handleChange} />
      <br />
      regdate : <input value={board.regdate} readOnly />
      <br />
      <br />
      <button onClick={handleSave}>저장하기</button>
    </div>
  );
}

export default BoardUpdate;
