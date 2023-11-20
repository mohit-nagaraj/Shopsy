import React, { useEffect, useState } from "react";
import "./featured.scss";
import Card from "../Card/Card";
import axios from "axios";

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
  const [products, setProducts] = useState([]);
  //can also use react query but we are not gonna use any post request so we can use useEffect
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res= await axios.get("http://localhost:1337/api/products",{//header
          headers:{
            Authorization: "Bearer 6c5be87916f227fe8c5b47cc1d28c0624eb83b2b9cab2ecc9d97ddc15ceb5144a103fe586374bfff3dd6df92db9b07b02f3fe18d0ec7ab550b0d6f5607b6aa1b1a88fe95ffce6245ad86798942ad637448f35ff414be71eb4c8099bc6b802658dd59785fd25e456c26e4011837fb274c0f17a97b70081e7bff9f21449b6c8325",
          },
        });
        console.log(res.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[])
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
