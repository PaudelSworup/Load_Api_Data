import UseEff from "./hooks/UseEff";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataFetch from "./hooks/DataFetch";
import Detail from "./hooks/Detail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UseEff />} />
          <Route path="/api" element={<DataFetch />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
