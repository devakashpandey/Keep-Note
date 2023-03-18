import React from "react";
import "./CreateNote.css";
import { BsPlusCircleFill } from "react-icons/bs";

const CreateNote = () => {
  return (
    <>
      <div className="main-note">
        <form>
          <input type="text" placeholder="Title"></input>
          <textarea rows="" cols="" placeholder="Write a note.."></textarea>
          <BsPlusCircleFill />
        </form>
      </div>
    </>
  );
};

export default CreateNote;
