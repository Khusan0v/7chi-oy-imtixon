
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveProducts, setLoading, setError } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import style from "./main.module.scss";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const Main = ({ selectedBrand, selectedColor, sortBY }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart.items);

  // Sorting products based on the selected sorting option
  const productsSort = [...products].sort((p1, p2) => {
    if (sortBY === "cheap") {
      return p1.price - p2.price;
    }
    if (sortBY === "expensive") {
      return p2.price - p1.price;
    }
    return 0;
  });

  // Fetching products when selectedBrand, selectedColor, or sortBY changes
  useEffect(() => {
    async function fetchProducts() {
      dispatch(setLoading(true));
      let query = "https://headphones-server.onrender.com/products";
      const params = [];
      
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name_like=${encodeURIComponent(selectedBrand)}`);
      }
      
      // If params are present, append them to the query
      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }
      
      try {
        const response = await fetch(query);
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        const data = await response.json();
        dispatch(saveProducts(data));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    }
    
    fetchProducts();
  }, [selectedBrand, selectedColor, sortBY, dispatch]);
  

  // Handling adding products to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
 
  // console.log(handleAddToCart)
  return (
    <div>
      {loading && <h3>Loading products...</h3>}
      {error && <p>{error}</p>}
      <ul className={style.products}>
        {productsSort.map((p) => {
          const productInCart = cart.find((item) => item.id === p.id);
          const disabledBtn = productInCart != null;

          return (
            <li className={style.product_card} key={p.id}>
              <img style={{ width: "100%" }} src={p.image_url} alt={p.name} />
              <Link to={`product/${p.id}`} ><h3>{p.name}</h3></Link>
              <h4 style={{ height: "60px" }}>{p.description}</h4>

              <div className={style.colors}>
                {p.color_options.map((col) => (
                  <li 
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "solid .9px",
                      borderRadius: "50%",
                      background: col,
                    }}
                    key={col} // Using color as the key here
                  ></li>
                ))}
              </div>
              <p>${p.price}</p>

              <button
                className={style.button}
                disabled={disabledBtn}
                style={
                  disabledBtn
                    ? { cursor: "not-allowed", background: "gray" }
                    : { cursor: "pointer" }
                }
                onClick={() => handleAddToCart(p)}
              >
        
                {disabledBtn ? (
                  <p>Added to Cart</p>
                ) : (
                  <p>
                    <FiShoppingCart /> Add to Cart
                  </p>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;