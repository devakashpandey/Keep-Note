import "./App.css";
import Header from "./components/header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateNote from "./components/createNote/CreateNote";
import Note from "./components/note/Note";
import { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((prevData) => {
      return prevData.filter((currVal, index) => index !== id);
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateNote addNote={addNote} />

      {addItem.map((currVal, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={currVal.title}
            content={currVal.content}
            deleteItem={onDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
