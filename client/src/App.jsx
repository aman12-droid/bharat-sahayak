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

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/chatbot" element={<Chatbot />} />

        <Route path="/farmer" element={<Farmer />} />

        <Route path="/student" element={<Student />} />

        <Route path="/healthcare" element={<Healthcare />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;