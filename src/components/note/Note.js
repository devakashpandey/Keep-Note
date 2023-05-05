import React from "react";
import "./Note.css";
import { MdDeleteOutline } from "react-icons/md";

const Note = ({ title, content, deleteItem, id }) => {
  const deleteNote = () => {
    deleteItem(id);
  };
  return (
    <>
      <div className="note">
        <h1 className="title">{title}</h1>
        <p>{content}</p>
        <MdDeleteOutline className="delete" onClick={deleteNote} />
      </div>
    </>
  );
};

export default Note;
