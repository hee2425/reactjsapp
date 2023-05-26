import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import 짱구 from "images/zzanggu.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

function BoardRetrieve(props) {
  const [boardList, setBoardList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "/rest/webboard/list.do",
    })
      .then((res) => {
        console.log(res);
        setBoardList(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <p>BoardRetrieve</p>
      <img src={짱구} alt="zzanggu" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>bno</th>
            <th>title</th>
            <th>content</th>
            <th>writer</th>
            <th>regdate</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {boardList.map((board, index) => (
            <tr key={index}>
              <td>
                <Link to={`/board/detail/${board.bno}`}>{board.bno}</Link>
              </td>
              <td>{board.title}</td>
              <td>{board.content}</td>
              <td>{board.writer}</td>
              <td>{board.regdate}</td>
              <td>
                <Link to="/board/update" state={{ boardData: board }}>
                  <Button>수정</Button>
                </Link>
                <Link to="/board/delete" state={{ boardid: board.bno }}>
                  <Button>삭제</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardRetrieve;
