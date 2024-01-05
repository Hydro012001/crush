import { BrowserRouter } from "react-router-dom";
import Route from "./Router/Route";
import "./RootCss.css";

function App() {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}

export default App;
