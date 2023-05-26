import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App2 from "./App2"; //확장자가 없으면 자바스크립트를 뜻함
import reportWebVitals from "./reportWebVitals";
//import MyJSXTest from "components1/MyJSXTest";
//import WebBoardList from "components1/WebBoardList";
//import App3 from "App3";
//import AppStart4 from "AppStart4";
import StateTestComponent from "components4/StateTestComponent";
import ReducerTestComponent from "components4/ReducerTestComponent";
import { CounterProvider } from "components4/CounterProvider";
import { CountLabel, NameChange, PlusButton } from "components4/ProviderTest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardHome from "boardcomponents/BoardHome";
import SmartHome from "components3/SmartHome";
import { MyTimer } from "components2/MyTimer";
import WebBoardList from "components1/WebBoardList";
import NotFoundComponent from "boardcomponents/NotFoundComponent";

const root = ReactDOM.createRoot(document.getElementById("root")); //index.html의 root에 삽입
root.render(
  // <React.StrictMode>
  // <AppStart4 />
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/board/*" element={<BoardHome></BoardHome>} />
        <Route path="/smart" element={<SmartHome />} />
        <Route path="/timer" element={<MyTimer />}></Route>
        <Route path="/webboard" element={<WebBoardList />}></Route>
        <Route path="/state" element={<StateTestComponent />}></Route>
        <Route path="/reduce" element={<ReducerTestComponent />}></Route>
        <Route
          path="/provider"
          element={
            <CounterProvider>
              <CountLabel />
              <PlusButton />
              <NameChange />
            </CounterProvider>
          }
        ></Route>
        <Route path="*" element={<NotFoundComponent />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <StateTestComponent />
    <ReducerTestComponent />
    <CounterProvider>
      <CountLabel />
      <PlusButton />
      <NameChange />
    </CounterProvider> */}
  </>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
