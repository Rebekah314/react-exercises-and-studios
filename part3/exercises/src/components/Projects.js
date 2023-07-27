import React from "react";
import bookData from "./../data.json";
import { useState } from "react";

export default function MyProjects() {
  const [index, setIndex] = useState(0);

  const bookInfo = bookData[index];

  const handleClick = () => {
    if (index < bookData.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <p>Title: {bookInfo.title}</p>
      <p>Author: {bookInfo.author}</p>
      <p>Published: {bookInfo.yearPublished}</p>
      <img src={bookInfo.coverImage} alt={bookInfo.title}/>
    </div>
  );
}
