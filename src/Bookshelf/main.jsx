import React, { useState } from "react";
import Bookcase from "./Bookcase";
import Booklisting from "./Booklisting";

const Main = () => {
  const [books, setBooks] = useState([]);
  

  const handleAddBookRecord = (book) => {
      setBooks(prev => [...prev, book])
  }

  return (
    <div className="main">
      <Bookcase submit={handleAddBookRecord} />
      <Booklisting books={books} />
    </div>
  );
};

export default Main;
