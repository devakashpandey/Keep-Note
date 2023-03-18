import React, { useState } from "react";
import "./CreateNote.css";
import { BsPlusCircleFill } from "react-icons/bs";

const CreateNote = ({ addNote }) => {
  const [show, setShow] = useState(false);

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

  const expandIt = () => {
    setShow(true);
  };

  const shrinkIt = () => {
    setShow(false);
  };

  return (
    <>
      <div className="main-note ">
        <form className="container">
          {show ? (
            <input
              type="text"
              placeholder="Title"
              value={note.title}
              onChange={inputEvent}
              name="title"
            ></input>
          ) : null}
          <textarea
            rows=""
            cols=""
            placeholder="Write a note.."
            value={note.content}
            onChange={inputEvent}
            name="content"
            onClick={expandIt}
            onDoubleClick={shrinkIt}
          ></textarea>
          {show && <BsPlusCircleFill className="addbtn" onClick={addEvent} />}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
