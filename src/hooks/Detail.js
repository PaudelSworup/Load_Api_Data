import React from "react";
import "./detail.css";

import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <div className="detail">
        {data.map((cur) => {
          if (cur.id == id) {
            return (
              <div key={cur.id} className="det">
                <div className="detailImage">
                  <img src={cur.image} alt="img" />
                </div>
                <div className="description">
                  <p className="title">{cur.title}</p>
                  <p className="desc">{cur.description}</p>
                  <p className="desc">Price Rs.{cur.price}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Detail;
