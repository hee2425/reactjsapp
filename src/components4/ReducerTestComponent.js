//버튼 클릭시 숫자 증가,감소하기(리액트 변수의 값의 상태를 관리, UI그리기)

import React, { useCallback, useReducer, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Table from "react-bootstrap/Table";

const initMember = [
  {
    memberid: 1,
    membername: "홍길동1",
    email: "hongGD1@gmail.com",
    active: true,
  },
  {
    memberid: 2,
    membername: "홍길동2",
    email: "hongGD2@gmail.com",
    active: true,
  },
  {
    memberid: 3,
    membername: "홍길동3",
    email: "hongGD3@gmail.com",
    active: false,
  },
];

const initMember2 = {
  input: { membername: "", email: "", active: false },
  memberList: initMember,
};

//state : reducer가 관리하는 data
function reducer2(state, action) {
  switch (action.type1) {
    case "CHANGE_INPUT": //값이 입력될때 onChange에서 호출
      return {
        ...state,
        input: {
          ...state.input,
          [action.name]:
            action.name === "active" ? action.checked : action.value,
        },
      };
    case "CREATE_MEMBER": //멤버 추가시 호출[...memberList, action.member]
      return {
        input: state.input,
        memberList: state.memberList.concat(action.member), //id까지 있는 상태
      };
    case "TOGGLE_MEMBER": //active변경
      return {
        ...state,
        memberList: state.memberList.map((mem) =>
          mem.memberid === action.memberid
            ? { ...mem, active: !mem.active }
            : mem
        ),
      };
    case "REMOVE_MEMBER":
      return {
        ...state,
        memberList: state.memberList.filter(
          (mem) => mem.memberid !== action.memberid
        ),
      };
    default:
      return state;
  }
}

function ReducerTestComponent(props) {
  const [count, setCount] = useState(0); //괄호 안에 count의 초깃값
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  //Reducer이용 상태관리
  //상태관리 메서드 : reducer2
  //상태관리 대상 : state
  //상태관리 메서드 호출 : dispatcher2
  //상태관리 대상의 초기값 : initMember2
  const [state, dispatcher2] = useReducer(reducer2, initMember2);

  const { memberList } = state; //배열    object {input:{}, memberList[]}에서 membeList를 뺌
  const { membername, email, active } = state.input; //문자값 - 오브젝트에서 값 빼냄

  //DOM접근을 위해 추가
  //const nameRef = useRef();
  const emailRef = useRef();

  //등록, 수정, 삭제, 목록보기
  const nextMemberId = useRef(4);
  //전개 연산자=> ...: 다른 속성이 추가될때 기존 속성은 유지
  //input type이 text이면 name, value
  //input type이 checkbox이면 name, value, checked
  const handleChange = (event) => {
    const { name, checked, value } = event.target;
    // console.log(name, checked, value);
    dispatcher2({
      type1: "CHANGE_INPUT",
      name: name,
      checked: checked,
      value: value,
    });
  };

  const handleMemberAdd = () => {
    if (membername === "" || email === "") return; //밑 로직 수행 안함
    var newMember = {
      memberid: nextMemberId.current,
      membername: membername,
      active: active,
      email: email,
    };
    dispatcher2({ type1: "CREATE_MEMBER", member: newMember });
    nextMemberId.current += 1;
    emailRef.current.value = "";
  };

  //member의 active를 변경하기
  const handleToggle = (mid) => {
    dispatcher2({ type1: "TOGGLE_MEMBER", memberid: mid });
  };

  //member지우기...memberList에서 mid가 같지 않은 것만 남긴다.
  const handleDelete = (mid) => {
    dispatcher2({ type1: "REMOVE_MEMBER", memberid: mid });
  };

  return (
    <div>
      <MyCounter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <hr />
      <CreateMember
        handleChange={handleChange}
        handleMemberAdd={handleMemberAdd}
        membername={membername}
        emailRef={emailRef}
        active={active}
      />
      <br />
      <hr />
      <MemberList
        memberList={memberList}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
}

function MyCounter({ count, handleIncrement, handleDecrement }) {
  //컴포넌트는 무조건 대문자로 시작
  return (
    <div>
      <p>현재 count값:{count}</p>
      <ButtonGroup size="md">
        <Button variant="primary" onClick={handleIncrement}>
          증가
        </Button>
        <Button variant="danger" onClick={handleDecrement}>
          감소
        </Button>
      </ButtonGroup>
    </div>
  );
}

function CreateMember({
  handleChange,
  handleMemberAdd,
  membername,
  active,
  emailRef,
}) {
  return (
    <>
      <p>멤버 등록</p>
      이름 :
      <input onChange={handleChange} name="membername" value={membername} />
      이메일 :<input onChange={handleChange} name="email" ref={emailRef} />
      active :
      <input
        type="checkbox"
        onChange={handleChange}
        name="active"
        checked={active}
      />
      <button onClick={handleMemberAdd}>멤버추가</button>
    </>
  );
}

const MemberList = ({ memberList, handleDelete, handleToggle }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>이메일</th>
            <th>active</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* "": return만 있을 경우, () : 간단한 경우, {} : 로직도 있고, return을 작성해야함 */}
          {memberList.map((item, index) => (
            <tr key={index}>
              <td>{item.memberid}</td>
              <td>{item.membername}</td>
              <td>{item.email}</td>
              <td style={{ color: item.active ? "blue" : "red" }}>
                {item.active ? "true" : "false"}
              </td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    variant="warning"
                    onClick={() => handleDelete(item.memberid)}
                  >
                    삭제
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => handleToggle(item.memberid)}
                  >
                    toggle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReducerTestComponent;
