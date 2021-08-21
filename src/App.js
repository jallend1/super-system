import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Work from "./Components/Work";
import Services from './Components/Services';
import About from './Components/About';
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
            <Services />
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
