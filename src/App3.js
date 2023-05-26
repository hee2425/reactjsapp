import React from "react";
import FunctionComp2, {
  score1,
  score2,
  FunctionComp1,
} from "components2/FunctionComponent1";
import { ClassComp1, ClassComp2 } from "components2/ClassComponent1";
import PropTypes from "prop-types";

function App3(props) {
  console.log(score1 + score2);
  const arr = ["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <div>
      <p>score1:{score1}</p>
      <p>score2:{score2}</p>
      <FunctionComp1
        title="f1"
        contents="function comp1"
        price={100}
        subject={arr}
        color="pink"
      >
        AA
      </FunctionComp1>
      <FunctionComp2
        title="f2"
        contents="function comp2"
        price={150}
        subject={arr}
        color="lightblue"
      >
        BB
      </FunctionComp2>
      <ClassComp1
        title="c1"
        contents="class comp1"
        price={300}
        subject={arr}
        color="lightcoral"
      >
        CC
      </ClassComp1>
      <ClassComp2
        title="c2"
        contents="class comp2"
        price={400}
        subject={arr}
        color="lightgray"
      >
        DD
      </ClassComp2>
      <hr />
      <FunctionComp2>속성값 할당 안함</FunctionComp2>
      <ClassComp1>속성값 할당 안함</ClassComp1>
      <ClassComp2>속성값 할당 안함(선언할때 디폴트 값 선언)</ClassComp2>
    </div>
  );
}

//값이 없는 경우에 디폴트 값 사용하도록 따로 선언
FunctionComp2.defaultProps = {
  title: "값없음",
  contents: "내용없음",
  price: 999,
  color: "LightSalmon",
};

ClassComp1.defaultProps = {
  title: "없어용",
  contents: "없다고용",
  price: 0,
  color: "#C2CE8F",
};

//속성값 타입의 제한을 걸때 사용
FunctionComp1.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  price: PropTypes.number,
};
export default App3;
