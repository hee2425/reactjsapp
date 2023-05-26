import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BoardInsert(props) {
  const [board, setBoard] = useState({});
  const navi = useNavigate();
  const handleChange = (event) => {
    setBoard({ ...board, [event.target.name]: event.target.value });
  };

  const handleInsert = () => {
    axios({
      url: "/rest/webboard/register.do",
      method: "post",
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
      <p>BoardInsert</p>
      <div id="tblContent">
        <h3>🐣WebBoard Register🐣</h3>
        <div className="panel-heading">게시글 작성하자~~~~~~~</div>
        <div className="panel-body">
          <form action="" method="post">
            <div className="form-group">
              <label>Title</label>{" "}
              <input
                className="form-control"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                className="form-control"
                rows="3"
                name="content"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Writer</label>{" "}
              <input
                className="form-control"
                name="writer"
                onClick={handleChange}
              />
            </div>
            <Button
              type="button"
              className="btn btn-default"
              onClick={handleInsert}
            >
              입력하기
            </Button>
            <button type="reset" className="btn btn_primary">
              Reset Button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BoardInsert;
