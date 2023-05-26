import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BoardDetail(props) {
  const { bno } = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
    axios({
      url: `/rest/webboard/view.do/${bno}`,
      method: "get",
    })
      .then((responseData) => {
        console.log(responseData.data);
        setBoard(responseData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); //한번만

  return (
    <div>
      <p>BoardDetail</p>
      bno : <input defaultvalue={board.bno} />
      <br />
      제목 : <input name="title" defaultvalue={board.title} />
      <br />
      내용 : <input name="content" defaultvalue={board.content} />
      <br />
      작성자 : <input name="writer" defaultvalue={board.writer} />
      <br />
      regdate : <input defaultvalue={board.regdate} />
      <br />
      <Link to="/board/list.do">
        <button>리스트 이동</button>
      </Link>
    </div>
  );
}

export default BoardDetail;
