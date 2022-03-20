
import './App.css';
import Landing from "./Landing";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Landing/>
      </div>
    </div>
  );
}

export default App;
