import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/products/${id}?populate=*`
  );

  return (
    <div className="product">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes.img.data.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes.img2.data.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes[selectedImg].data.attributes.url
                }
                alt=""
              />
              {/* How nicely they have inclded the selected img part inside the link */}
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes.title}</h1>
            <span className="price">₹{data?.attributes.newPrice}</span>
            <p>{data?.attributes.desc}</p>
            <div className="quantity">
              <button
                onClick={() => setQuantity((prev) => prev - 1)} //one more way to decrease using hook
                disabled={quantity === 1} //to stop decreasing when quantity is 1
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(//dispatching the action
                  addToCart({//name of the action
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    img: data.attributes.img.data.attributes.url,
                    newPrice: data.attributes.newPrice,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon />
                ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon />
                ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vender: Shopsy</span>
              <span>
                Product type:{" "}
                {data?.attributes.sub_categories.data[0].attributes.title}
              </span>
              <span>
                Tag: {data?.attributes.sub_categories.data[0].attributes.title},{" "}
                {data?.attributes.categories.data[0].attributes.desc}
              </span>
            </div>
            <div className="details">
              <hr />
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
