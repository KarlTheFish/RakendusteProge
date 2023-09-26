import logo from './logo.svg';
import './App.css';
import Math from "./components/Math";
import Karl from "./components/AboutKarl";

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <Karl/>
            <Math/>
            <Math/>
            <Math/>
        </header>
      </div>
  );
}

export default App;
