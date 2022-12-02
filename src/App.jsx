import "./App.css";
import Home from "./components/Home";
import Programs from "./components/Programs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
