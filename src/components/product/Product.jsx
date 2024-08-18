import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import { FiShoppingCart } from "react-icons/fi";
import style from './product.module.scss';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://headphones-server.onrender.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const productInCart = cart.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 1;
  const disabledBtn = productInCart != null;

  const handleAddToCart = () => {
    if (!productInCart) {
      dispatch(addToCart(product));
    }
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(product.id));
  };

  return (
    <div>
      <img src={product.image_url} alt={product.name} style={{ width: '100%' }} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${(product.price * quantity).toFixed(2)}</p>
      <div>
        {product.color_options.map((color) => (
          <span 
            key={color} 
            style={{
              display: 'inline-block',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: color,
              marginRight: '5px',
            }}
          ></span>
        ))}
      </div>

      <div className={style.quantityControls}>
        <button 
          onClick={handleDecrement} 
          disabled={quantity === 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <button
        className={style.button}
        disabled={disabledBtn}
        style={
          disabledBtn
            ? { cursor: "not-allowed", background: "gray" }
            : { cursor: "pointer" }
        }
        onClick={handleAddToCart}
      >
        {disabledBtn ? (
          <p>Added to Cart</p>
        ) : (
          <p>
            <FiShoppingCart /> Add to Cart
          </p>
        )}
      </button>
    </div>
  );
}

export default Product;
