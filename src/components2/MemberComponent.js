import React, { useState } from "react";

function MemberComponent(props) {
  const [member, setMember] = useState({ name: "홍길동", age: 20 });
  const handleNameChange = (e) => {
    setMember({ ...member, name: e.target.value });
  };
  const handleAgeChange = (e) => {
    setMember({ ...member, age: e.target.value });
  };
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  var obj = {};
  var str = "myage";
  obj.name = "name";
  obj[str] = "age";
  console.log(obj);

  return (
    <div>
      <h1>
        이름은 {member.name} 나이는 {member.age}
        {""}
      </h1>
      1.이름 : <input type="text" onChange={handleNameChange} />
      나이 : <input type="number" onChange={handleAgeChange} />
      <br />
      2.이름 : <input type="text" onChange={handleChange} name="name" />
      나이 : <input type="number" onChange={handleChange} name="age" />
    </div>
  );
}

export default MemberComponent;
