import React from "react";

const Form = (props) => {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    isbn,
    setIsbn,
    currentBookId,
    setCurrentBookId,
    handelSubmit,
    cancelEdit,
  } = props;

  // title = { title };
  // setTitle = { setTitle };
  // author = { author };
  // setAuthor = { setAuthor };
  // isbn = { isbn };
  // setIsbn = { setIsbn };
  // currentBookId = { currentBookId };
  // setCurrentBookId = { setCurrentBookId };

  return (
    <form onSubmit={handelSubmit}>
      <label>Title</label>
      <input
        autoFocus
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <label>Author</label>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        type="text"
      />
      <label>Isbn</label>
      <input
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        type="text"
        required
      />
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default Form;
