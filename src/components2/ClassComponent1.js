//rcc : class component
import React, { Component } from "react";

class ClassComp1 extends Component {
  constructor(props) {
    //생성자 함수
    //constructor정의는 필수 아님
    //constructor정의시 반드시 부모생성자 호출이 필요
    super(props); //부모생성자 호출
    console.log("ClassComp1 constructor");
    this.state = { title: "초기값!!", buttonVisible: false };
  }

  componentDidMount() {
    console.log("ClassComp1 componentDidMount");
  }

  componentDidUpdate() {
    console.log("ClassComp1 componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("ClassComp1 componentWillUnmount");
  }

  reset = () => {
    this.setState({ title: "초기값", buttonVisible: false });
  };
  render() { 
    //화면에 그리는 것 : 랜더링
    console.log("부모가 rendering.....");
    const { title, buttonVisible } = this.state;
    return (
      <>
        <div>
          <button onClick={() => this.setState({ buttonVisible: true })}>
            자식보이기
          </button>
          {buttonVisible && (
            <div>
              <ChildComponent title={title} />  
              <button onClick={this.reset}> 다시 시작</button>
            </div>
          )}
        </div>
      </>
    );
  }
}

//   render() {
//     //class 컴포넌트는 render()함수가 필수
//     return (
//       <div style={{ color: this.props.color }}>
//         <h1>ClassComp1</h1>
//         <p>1.title : {this.props.title}</p>
//         <p>2.contents : {this.props.contents}</p>
//         <p>3.children : {this.props.children}</p>
//         <p>4.price : {this.props.price}</p>
//         <ul>
//           {this.props.subject &&
//             this.props.subject.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//         </ul>
//       </div>
//     );
//   }
// }

class ChildComponent extends Component {
  componentDidMount() {
    console.log("ChildComponent componentDidMount");
  }

  componentDidUpdate() {
    console.log("ChildComponent componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("ChildComponent componentWillUnmount");
  }
  render() {
    console.log("자식이 랜더링 된다....");
    return (
      <div>
        <p>ChildComponent에서 부모가 보낸 속성읽기 : {this.props.title}</p>
      </div>
    );
  }
}

class ClassComp2 extends Component {
  static defaultProps = {
    //선언할때 디폴트 값 사용
    title: "없어용",
    contents: "없다고용",
    price: 0,
  };
  render() {
    const { title, contents, children, price, subject, color } = this.props;
    return (
      <div style={{ color: color }}>
        <h1>ClassComp2</h1>
        <p>1.title : {title}</p>
        <p>2.contents : {contents}</p>
        <p>3.children : {children}</p>
        <p>4.price : {price}</p>
        <ul>
          {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export { ClassComp1, ClassComp2 };
