import React from "react";
import { Link } from "react-router-dom";

function BoardMenu(props) {
  return (
    <div>
      <p>⭐BoardMenu</p>
      <Link to="/board/list">
        <button className="btn btn-primary">Board조회</button>
      </Link>
      <Link to="/board/insert">
        <button className="btn btn-success">Board입력</button>
      </Link>
    </div>
  );
}

export default BoardMenu;
