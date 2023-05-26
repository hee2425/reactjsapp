//버튼 클릭시 숫자 증가,감소하기(리액트 변수의 값의 상태를 관리, UI그리기)

import React, { useCallback, useRef, useState } from "react";
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

function StateTestComponent(props) {
  const [count, setCount] = useState(0); //괄호 안에 count의 초깃값
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  //member, memberList
  const [member, setMember] = useState({}); //object
  const [memberList, setMemberList] = useState(initMember); //배열

  //등록, 수정, 삭제, 목록보기
  const nextMemberId = useRef(4);
  //전개 연산자=> ...: 다른 속성이 추가될때 기존 속성은 유지
  const handleChange = (event) => {
    const { name, checked, value } = event.target;
    setMember({ ...member, [name]: name === "active" ? checked : value });
  };

  const handleMemberAdd = () => {
    //setMember( {...member, memberid:nextMemberId.current});  //setter는 비동기
    const newMember = { ...member, memberid: nextMemberId.current }; //동기 : 새로운 멤버로 만든다.
    setMemberList([...memberList, newMember]);
    nextMemberId.current += 1;
  };

  //member의 active를 변경하기
  const handleToggle = (mid) => {
    setMemberList(
      memberList.map((mem) =>
        mem.memberid === mid ? { ...mem, active: !mem.active } : mem
      )
    );
  };

  //member지우기...memberList에서 mid가 같지 않은 것만 남긴다.
  const handleDelete = useCallback(
    (mid) => {
      setMemberList(memberList.filter((mem) => mem.memberid !== mid));
    },
    [memberList]
  );

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
        <Button onClick={handleIncrement}>증가</Button>
        <Button onClick={handleDecrement}>감소</Button>
      </ButtonGroup>
    </div>
  );
}

function CreateMember({ handleChange, handleMemberAdd }) {
  return (
    <>
      <p>멤버 등록</p>
      이름 :<input onChange={handleChange} name="membername" />
      이메일 :<input onChange={handleChange} name="email" />
      active :<input type="checkbox" onChange={handleChange} name="active" />
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
              <td>{item.active ? "true" : "false"}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button onClick={() => handleDelete(item.memberid)}>
                    삭제
                  </Button>
                  <Button onClick={() => handleToggle(item.memberid)}>
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

export default StateTestComponent;
