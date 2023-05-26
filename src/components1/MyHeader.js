import React from 'react';   //rsf치면됨

function Header(props) {
    console.log("MyHeader.js의 Header 컴포넌트");
    return (
        // 반드시 전체가 하나로 싸여있어야함
        <header>
            <h1>반갑습니다....</h1>
            <h2>React배우기전 선수지식은?</h2>
            <hr />
        </header>
    );
}

function HeaderF1(){
    return (
        <div>
            <p>MyHeader.js의 HeaderF1함수이다.</p>
        </div>
    );
}

export {Header, HeaderF1};
