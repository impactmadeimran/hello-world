import React, { useState } from "react";

const Bookcase = ({ submit }) => {
  const [book, setBook] = useState({
    title: "",
    borrower: "",
    date_taken: "",
    expected_return_date: "",
  });

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setBook((previousState) => ({ ...previousState, [id]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit(book);
    setBook({
      title: "",
      borrower: "",
      date_taken: "",
      expected_return_date: "",
    });
  };

  return (
    <div className="leftpanel">
      <div className="form">
        <form onSubmit={handleSubmit} align="center">
          <div className="items">
            <label>Person Name</label>
            <input
              id="borrower"
              value={book.borrower}
              onChange={handleChange}
              type="text"
            ></input>
          </div>
          <div className="items">
            <label>Bookname</label>
            <input
              type="text"
              value={book.title}
              id="title"
              onChange={handleChange}
            ></input>
          </div>
          <div className="items">
            <label>Date Taken</label>
            <input
              type="date"
              value={book.date_taken}
              id="date_taken"
              onChange={handleChange}
            ></input>
          </div>
          <div className="items">
            <label>Date Returned</label>
            <input
              type="date"
              value={book.expected_return_date}
              id="expected_return_date"
              onChange={handleChange}
            ></input>
          </div>
          <div className="items">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookcase;
