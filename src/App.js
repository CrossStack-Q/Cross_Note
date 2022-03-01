import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Signup from "./components/Signup";
import Login2 from "./components/Login";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import { useState } from "react";
import Alert from "./components/Alert";
import Login from "./components/cross";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/login2" element={<Login2 showAlert={showAlert}  />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}  />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
