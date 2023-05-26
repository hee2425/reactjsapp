import React from "react";

function MySection(props) {
  console.log("MySection.js.....컴포넌트");
  return (
    <>
      <section>
        <article>
          <h1>React 학습</h1>
          <p>Props</p>
          <p>state</p>
          <p>Component</p>
          <hr></hr>
        </article>
      </section>
      <hr></hr>
    </>
  );
}

function MySection2() {
  return (
    <div>
      <p>MySection2컴포넌트</p>
    </div>
  );
}

// export default MySection;
//하나의 컴포넌트만 디폴트 가능
export { MySection2, MySection as default };
