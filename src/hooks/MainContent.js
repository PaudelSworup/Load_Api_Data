import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./api.css";
import { useNavigate } from "react-router-dom";

const MainContent = ({ key, data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-div" key={key}>
        <img
          src={data.image}
          alt="img"
          onClick={() => navigate(`/detail/${data.id}`)}
        />
        <p className="title">{data.title}</p>
        <p>
          <FontAwesomeIcon className="icons" icon={faStar} />
          {data.rating.rate}
        </p>
        <p className="desc">Price Rs.{data.price}</p>
      </div>
    </>
  );
};

export default MainContent;
