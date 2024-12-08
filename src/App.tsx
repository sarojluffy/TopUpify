import { BrowserRouter } from "react-router-dom";
import Login from "./Appauth/Login/Login";
import Register from "./Appauth/Register/Register";
import RouteSS from "./Routes/RouteSS";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteSS />
      </BrowserRouter>
    </>
  );
}

export default App;
