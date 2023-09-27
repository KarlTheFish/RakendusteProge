import logo from './logo.svg';
import './App.css';
import Karl from "./components/AboutKarl";
import Math from "./components/Math";
import Toggle from "./components/Toggle";
import {useState} from "react";
import Show from "./components/Show";
import EpicForm from "./components/EpicForm";
import PropDrilling from "./components/PropDrilling";

function App() {
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="MainContainer">

        <p>Hi</p>
        <EpicForm/>
          <Show show={show}/>
        <Toggle toggleShow={toggleShow}/>
        <Math/>
    </div>
  )
}

export default App;
