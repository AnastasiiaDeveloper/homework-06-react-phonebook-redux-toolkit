import logo from "./logo.svg";
import "./App.css";
import MainBlockInp from "./components/input-comp/main-block-inp";
import List from "./components/list/list";

function App() {
  return (
    <div className="App">
      <div className="center">
        <MainBlockInp />
        <List />
      </div>
    </div>
  );
}

export default App;
