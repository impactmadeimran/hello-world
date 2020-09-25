import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <p>TItle: {book.title}</p>
      <p>Borrower: {book.borrower}</p>
      <p>Date Taken: {book.date_taken}</p>
      <p>Date to be returned: {book.expected_return_date}</p>
    </div>
  );
};

export default Book;
