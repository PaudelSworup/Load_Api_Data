import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main";

const DataFetch = () => {
  const [post, setPost] = useState([]);
  const [limit, setLimit] = useState(10);

  const allCatVal = [
    ...new Set(
      post.map((item) => {
        return item.category;
      })
    ),
    "All",
  ];

  const cat = [
    ...new Set(
      post.map((item) => {
        return item.category;
      })
    ),
  ];

  const filterData = (category) => {
    console.log(category);

    if (category === "All") {
      // console.log(JSON.parse(localStorage.getItem("data")));
      const allData = JSON.parse(localStorage.getItem("data"));
      console.log(allData);
      setPost(allData);
      return;
    }

    const newItems = post.filter((item) => {
      return item.category === category;
    });
    console.log(newItems);
    setPost(newItems);
  };

  const load = () => {
    if (post.length > limit) {
      setLimit(limit + 10);
      console.log("hello");
    } else {
      alert(`No more Items is on ${cat} `);
      return;
    }
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        localStorage.setItem("data", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Main
        allCatVal={allCatVal}
        post={post}
        filterData={filterData}
        limit={limit}
        load={load}
      />
    </>
  );
};

export default DataFetch;
