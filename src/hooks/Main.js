import React from "react";
import MainContent from "./MainContent";

const Main = ({ allCatVal, post, filterData, limit, load }) => {
  const data = post.slice(0, limit);

  return (
    <>
      <div className="buttons">
        {allCatVal.map((cur, index) => (
          <button onClick={() => filterData(cur)} key={index}>
            {cur}
          </button>
        ))}
      </div>
      <div className="main">
        {limit
          ? data.map((cur) => <MainContent key={cur.id} data={cur} />)
          : "No"}
      </div>
      <div className="button-div">
        <button className="btn" onClick={load}>
          Load More
        </button>
      </div>
    </>
  );
};

export default Main;
