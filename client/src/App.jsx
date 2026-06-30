import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Farmer from "./pages/Farmer";
import Student from "./pages/Student";
import Healthcare from "./pages/Healthcare";
import Login from "./pages/Login";
import Signup from "./pages/Signup";




function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/chatbot" element={<Chatbot />} />

        <Route path="/farmer" element={<Farmer />} />

        <Route path="/student" element={<Student />} />

        <Route path="/healthcare" element={<Healthcare />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;