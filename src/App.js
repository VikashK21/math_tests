// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import QuestionsAns from "./Components/QuestionsAns";
import SearchContainer from "./Components/SearchContainer";

function App() {
  return (
    <div>
      <Navbar />
      <SearchContainer />
      <QuestionsAns />
    </div>
  );
}

export default App;
