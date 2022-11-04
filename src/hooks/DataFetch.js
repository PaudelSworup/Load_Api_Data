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

  const filterData = (category) => {
    console.log(category);

    if (category === "All") {
      setPost(post);

      post.map((cur) => {
        console.log(cur);
      });
    }

    const newItems = post.filter((item) => {
      return item.category === category;
    });
    console.log(newItems);
    setPost(newItems);
  };

  // const filterData = (cat) => {
  //   post.map((cur) => {
  //     console.log(cur);
  //   });

  //   const newItems = post.filter((item) => {
  //     return item.category === cat;
  //   });
  //   console.log(newItems);
  //   setPost(newItems);
  // };
  const Load = () => {
    if (post.length > limit) {
      setLimit(limit + 10);
      console.log("hello");
    }
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        // setBtn(res.data);
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
        load={Load}
      />
    </>
  );
};

export default DataFetch;
