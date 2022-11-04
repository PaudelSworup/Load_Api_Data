import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseEff = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState(1);

  useEffect(() => {
    alert("Page rendered");
  }, []);

  const goToApi = () => {
    navigate("/api");
  };
  return (
    <>
      <center>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>ClickHere</button>
        <hr />

        <h2>{data}</h2>
        <button onClick={() => setData(data + 2)}>ClickHere</button>
        <hr />
        <br />
        <button onClick={goToApi}>API page</button>
      </center>
    </>
  );
};

export default UseEff;
