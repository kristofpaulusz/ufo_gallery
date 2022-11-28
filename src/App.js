// import logo from './logo.svg';
import "./App.css";
// import Picture from "./Picture";
import Gallery from "./Gallery";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UFO Sightings</h1>
        <Gallery key={"sightnings"} />
      </header>
    </div>
  );
}

export default App;
