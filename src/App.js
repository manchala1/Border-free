import "./App.css";
import Newhome from "./components/newhome";
import { Route, BrowserRouter } from "react-router-dom";
import Summary from "./components/summary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Newhome} />
          <Route path="/subhome" component={Summary} />
        </div>
      </BrowserRouter>
      <Newhome />
    </div>
  );
}

export default App;
