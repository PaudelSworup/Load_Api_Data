import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./api.css";
import { useNavigate } from "react-router-dom";

const Main = ({ allCatVal, post, filterData, limit, load }) => {
  const navigate = useNavigate();
  const data = post.slice(0, limit);
  // console.log(data);
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
          ? data.map((cur) => (
              <div className="main-div" key={cur.id}>
                <img
                  src={cur.image}
                  alt="img"
                  onClick={() => navigate(`/detail/${cur.id}`)}
                />
                <p className="title">{cur.title}</p>
                <p>
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  {cur.rating.rate}
                </p>
                <p className="desc">Price Rs.{cur.price}</p>
              </div>
            ))
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
