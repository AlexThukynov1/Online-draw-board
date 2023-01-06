import ToolBar from "./components/ToolBar";
import SettingBar from "./components/SettingBar";
import Board from "./components/Board";
import "./styles/main.scss"


function App() {
  return (
    <div className="app">
      <ToolBar/>
      <SettingBar/>
      <Board/>
    </div>
  );
}

export default App;
