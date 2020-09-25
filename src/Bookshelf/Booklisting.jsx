import React from "react";
import Book from "./Book";

const Booklisting = ({ books }) => {
  return (
    <div className="rightpanel">
      <div className="name">Customer Details</div>
      {books.map((book, index) => (
          <Book book={book} />
      ))}
    </div>
  );
};

export default Booklisting;
