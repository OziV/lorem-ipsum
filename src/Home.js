import React, { useState } from "react";
import data from "./data";

function Home() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handelOnChange = (e) => {
    const newCount = e.target.value;
    setCount(newCount);
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <>
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handelOnSubmit}>
          <input type="number" name="count" onChange={handelOnChange}></input>
          <button className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default Home;
