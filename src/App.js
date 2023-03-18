import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <CreateNote />
      <Note />
    </div>
  );
}

export default App;
