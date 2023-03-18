import React from "react";
import "./Note.css";
import { MdDeleteOutline } from "react-icons/md";

const Note = () => {
  return (
    <>
      <div className="note">
        <h1 className="title">NOTE</h1>
        <p>This is the content</p>
        <MdDeleteOutline className="delete" />
      </div>
    </>
  );
};

export default Note;
