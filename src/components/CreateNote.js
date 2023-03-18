import React, { useState } from "react";
import "./CreateNote.css";
import { BsPlusCircleFill } from "react-icons/bs";

const CreateNote = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (eve) => {
    const { name, value } = eve.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const addEvent = () => {
    addNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="main-note ">
        <form className="container">
          <input
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={inputEvent}
            name="title"
          ></input>
          <textarea
            rows=""
            cols=""
            placeholder="Write a note.."
            value={note.content}
            onChange={inputEvent}
            name="content"
          ></textarea>
          <BsPlusCircleFill className="addbtn" onClick={addEvent} />
        </form>
      </div>
    </>
  );
};

export default CreateNote;
