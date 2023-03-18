import React from "react";
import "./CreateNote.css";
import { BsPlusCircleFill } from "react-icons/bs";

const CreateNote = () => {
  return (
    <>
      <div className="main-note ">
        <form className="container">
          <input type="text" placeholder="Title"></input>
          <textarea rows="" cols="" placeholder="Write a note.."></textarea>
          <BsPlusCircleFill className="addbtn" />
        </form>
      </div>
    </>
  );
};

export default CreateNote;
