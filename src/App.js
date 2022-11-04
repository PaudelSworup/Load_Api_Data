import UseEff from "./hooks/UseEff";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataFetch from "./hooks/DataFetch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UseEff />} />
          <Route path="/api" element={<DataFetch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
