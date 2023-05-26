import React from "react";

const Light = ({ room, on }) => {
  console.log(room, on);
  return <div>{on ? "💡" : "⬛"}</div>;
};
//침실, 주방, 욕조 중에 하나만 바껴도 세개 모두 랜더링
//export default Light;

//침실, 주방, 욕조 중에 하나만 바뀌면 해당것만 랜더링  --> 성능향상을 위함
export default React.memo(Light);
    