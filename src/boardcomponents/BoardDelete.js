import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BoardDelete(props) {
  const location = useLocation();
  const bno = location.state.boardid;
  const navi = useNavigate();

  useEffect(() => {
    axios({
      url: `/rest/webboard/delete.do/${bno}`,
      method: "delete",
    })
      .then((response) => {
        console.log(response.data);
        alert(response.data);
        //조회페이지로 이동하기redirect
        navi("/board/list");
      })
      .catch(() => {});
  });

  return <div></div>;
}

export default BoardDelete;
