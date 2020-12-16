import React from "react";
import ReactDom from "react-dom";

// CSS
import "./style.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
);

const Image = () => (
  <img
    src="data:image/webp;base64,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"
    alt=""
  />
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
