import "./App.css";
import Header from "./components/Header.js";
import LearningArea from "./components/LearningArea.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" />
          <Route exact path="/learning" element={<LearningArea />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
