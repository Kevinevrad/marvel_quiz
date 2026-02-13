import "../../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// *COMPONENT IMPORTS
import Header from "../Header/index";
import Landing from "../Landing";
import Footer from "../Footer";
import Welcome from "../Welcome";
import Login from "../Login";
import SignUP from "../SignUp";
import ErrorPage from "../Errors";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/welcome" Component={Welcome} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUP} />
        <Route path="*" Component={ErrorPage} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
