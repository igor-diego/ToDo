import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form1 } from "./components/Form1/Form1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
      {/* <Form1 /> */}
        <Routes>
          <Route path="/" element={<Form1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
