import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function StateTest(props) {
  var a = 100;
  var b = 200; //const: 상수, 값 변경 못함
  //상태값이 변경되면 UI가 바뀐다. (자동으로 UI rendering)
  const [count, setCount] = useState(0); //count=0, 값변경은 setCount()이용
  const [myName, setMyName] = useState("채히");
  const [myAge, setMyAge] = useState("20");

  //useRef : 1. 특정DOM선택을 위해 사용
  const nameRef = useRef();
  const ageRef = useRef();

  //성능향상을 위해 함수를 rendering시마다 재정의할 필요는 없다.
  //특정값이 변경시에만 다시 생성한다.
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  useEffect(() => {
    console.log("handleIncrement가 변경되었습니다.");
  }, [handleIncrement]);

  //lie cycle, []의존 배열
  useEffect(() => {
    console.log("1. StateTest 컴포넌트가 load시(mount) 1회 발생");
  }, []);

  useEffect(() => {
    console.log(
      "2. StateTest 컴포넌트가 load시(mount)발생, rendering될때마다 발생"
    );
  });

  useEffect(() => {
    console.log(
      "3. StateTest 컴포넌트가 load시(mount) 발생, count만 바뀌었을때마다 발생"
    );
  }, [count]);

  useEffect(() => {
    console.log(
      "4. StateTest 컴포넌트가 load시(mount) 발생, count 또는 myName 바뀌었을때마다 발생"
    );
  }, [count, myName]);

  const handleChange = (e) => {
    if (e.target.name === "mname") {
      setMyName(e.target.value);
    } else if (e.target.name === "age") {
      setMyAge(e.target.value);
    }
  };

  const handleNameMove = () => {
    nameRef.current.focus(); //name레퍼런스의 현재의 포커스로 이동
  };
  const handleAgeMove = () => {
    ageRef.current.focus();
  };
  /////////////////////////////////////////////////////////////////////////
  //변수선언1..랜더링시 초기화
  var userid1 = 3; //랜더링 되면 값이 변했어도 다시 3이됨

  //변수선언2(useRef이용)
  //랜더링시 초기화하지 않음
  var userid2 = useRef(3);
  const handleUseridIncrement = () => {
    userid1 += 1;
    userid2.current += 1;
    console.log("userid1=" + userid1 + ", userid2=" + userid2.current);
  };

  const initMember = [
    { mid: 1, mname: "채히", email: "zzahee@gmail.com", active: true },
    { mid: 2, mname: "채히2", email: "zzahee2@gmail.com", active: false },
  ];
  const [member, setMember] = useState({});
  const [memberList, setMemberList] = useState(initMember);

  const nextMid = useRef(3);

  //이름변경시, 이메일변경시
  const handleChange2 = (e) => {
    var memberVal =
      e.target.name !== "active" ? e.target.value : e.target.checked;
    setMember({ ...member, [e.target.name]: memberVal });
  };

  const handleAdd = (e) => {
    //불가 setMember({...member, mid:nextMid.current});  //setter는 비동기동작
    var tempMember = { ...member, mid: nextMid.current }; //동기
    setMemberList([...memberList, tempMember]);
    nextMid.current += 1;
  };

  //useMemo : 연산된 값을 저장해서 재사용, 오래걸리는 작업을 매번하지말자!
  const longTimeFunction = (su) => {
    console.log(su + "받아서 계산중......");
    for (let i = 1; i <= 100000000; i++) {
      su += i;
    }
    return su;
  };
  //count가 변경되지 않는다면 계산결과는 같기때문에 재계산이 불필요, 계산된 결과를 기억하기
  //[의존 배열에 등록된 변수]가 변경시에만 재계산
  var calc = useMemo(() => longTimeFunction(count), [count]);

  //JSX(JavaScript XML) : React 문법, 바벨에 의해 컴파일된다.(JS->JS)
  // var output = "<div></div>", render(output);
  //Root1개, 계층구조, 반드시 닫는 tag
  return (
    <div>
      <p>오래걸려서 계산한 값 : {calc}</p>
      <p>
        <span id="aa">a : {a}</span>
        <span id="bb">b: {b}</span>
        <span>count현재값:{count}</span>
        <span>myname:{myName}</span>
        <span>myage:{myAge}</span>
      </p>
      <Button
        variant="outline-primary"
        onClick={function () {
          a = a + 1;
          document.getElementById("aa").innerHTML = "a : " + a;
        }}
      >
        a값 증가
      </Button>
      <Button
        onClick={() => {
          b = b - 1;
          document.getElementById("bb").innerHTML = "b : " + b;
        }}
        variant="outline-danger"
      >
        b값 증가
      </Button>
      <Button variant="outline-warning" onClick={handleIncrement}>
        count 증가
      </Button>
      <Button variant="outline-success" onClick={handleDecrement}>
        count 감소
      </Button>
      <br />
      이름 :{" "}
      <input
        ref={nameRef}
        onChange={handleChange}
        value={myName}
        name="mname"
      />
      나이 :{" "}
      <input ref={ageRef} onChange={handleChange} value={myAge} name="age" />
      <button onClick={handleNameMove}>이름으로 이동</button>
      <button onClick={handleAgeMove}>나이로 이동</button>
      <br />
      <Button onClick={handleUseridIncrement}>번호 증가</Button>
      <br />
      <hr />
      이름 :<input onChange={handleChange2} name="mname" />
      이메일 :<input onChange={handleChange2} name="email" />
      active :
      <input type="checkbox" onChange={handleChange2} name="active" />
      <button onClick={handleAdd}>등록</button>
      <table border="1 solid">
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>이메일</th>
            <th>active</th>
          </tr>
        </thead>
        <tbody>
          {/* "": return만 있을 경우, () : 간단한 경우, {} : 로직도 있고, return을 작성해야함 */}
          {memberList.map((item, index) => (
            <tr key={index}>
              <td>{item.mid}</td>
              <td>{item.mname}</td>
              <td>{item.email}</td>
              <td>{item.active ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StateTest;
