import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <CreateNote />
    </div>
  );
}

export default App;
