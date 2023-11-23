import React, { useEffect } from "react";
import "./featured.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const Featured = ({ type }) => {
  const customStyle = { marginBottom: `${type == "Featured" ? 70 : 20}px` };
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/products?populate=*&filters[type][$eq]=${type.toLowerCase()}`
  );

  return (
    <div className="featured" style={customStyle}>
      <div className="top">
        <h3>{type} products</h3>
        <p>
          {type == "Featured"
            ? "Discover our featured collection – a blend of sophistication and comfort. Elevate your style with our curated selection of on-trend pieces that seamlessly transition from day to night. "
            : "Explore the latest fashion sensations in our Trending section. From street-style essentials to runway-inspired looks, stay ahead of the curve with the hottest trends of the season."}
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!!"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Featured;
