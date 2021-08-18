import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Work from "./Components/Work";
function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <NavBar />
        <div className="slideArea">
          <div className="display">
            <Main />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
