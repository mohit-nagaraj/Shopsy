import React from "react";
import "./featured.scss";
import Card from "../Card/Card";
const data = [
  {
    id: 'klanwd19w',
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1000",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Long Sleeve T-shirt",
    isNew: true,
    oldPrice: 819,
    newPrice: 415,
  },
  {
    id: '98dwqo90',
    img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1000",
    img2: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Coat",
    isNew: true,
    oldPrice: 1125,
    newPrice: 817,
  },
  {
    id: 'awdawl28',
    img2: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1000",
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Sweatshirt",
    isNew: false,
    oldPrice: 1725,
    newPrice: 1248,
  }
];
const Featured = ({ type }) => {
  const customStyle={ marginBottom: `${type == "Featured"?70:20}px`};
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
        {data.map((e) => (
          <Card item={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
