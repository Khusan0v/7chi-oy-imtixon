import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../store/cartSlice';
import style from "../cardPage/cart.module.scss";
import { useNavigate } from 'react-router-dom';
import { AiOutlineX } from "react-icons/ai";

const Cart = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <div className={style.cardPage}>
                <button className={style.btn} onClick={() => navigate(-1)}>&larr; Back to Shopping</button>
                <h1>SHOPPING CART</h1>
                {items.length === 0 ? (
                    <p className={style.empty}>Your cart is empty :)</p>
                ) : (
                    <>
                        <div className={style.king}>
                        <div className={style.heroCart}>
                            <div className={style.cartBorder}></div>    
                            <div style={{ display: "flex", gap: "350px" }}>
                                <h3>Product</h3>
                                <div style={{ display: "flex", gap: "200px" }}>
                                    <h3>Quantity</h3>
                                    <h3>Price</h3>
                                </div>
                            </div>
                            <div className={style.cartBorder}></div>    

                            <div className={style.main}>
                                <ul className={style.products} style={{ display: "flex", flexWrap: "wrap" }}>
                                    {items.map((item) => (
                                        <li className={style.li} key={item.id}>
                                            <button className={style.buttonAside} onClick={() => dispatch(removeFromCart(item.id))}>
                                                <AiOutlineX />
                                            </button>

                                            <img src={item.image_url} alt={item.name} />

                                            <div className={style.descrip}>
                                                <h3 style={{width: "130px"}}>{item.name}</h3>
                                                <h4>{item.brand_name}</h4>
                                            </div>

                                            <div style={{backgroundColor: "#F5F5F5", width: "70px", height: "30px", borderRadius: "20px"}} className={style.quantityControls}>
                                                <button 
                                                    onClick={() => dispatch(decrementQuantity(item.id))} 
                                                    disabled={item.quantity === 1} style={{border: "none", fontSize: "20px", backgroundColor: "#F5F5F5", marginRight: "11px", marginLeft : "11px"}}
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button style={{border: "none", marginLeft: "11px", marginRight: "11px"}} onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                            </div>
                        
                                            <p style={{marginLeft: "180px"}}>{`$${(item.price * item.quantity).toFixed(2)}`}</p>
                                            <div className={style.cartBorder}></div>    

                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        
                        <div className={style.description}>
                            <h2 style={{marginBottom: "10px"}}>CART TOTALS</h2>
                            <div className={style.cartBorderr}></div>
                            <p>Shipping (3-5 Business Days)</p>
                            <p> TAX (estimated for the United States (US))</p>
                            <p>Subtotal</p>
                            <div className={style.cartBorderr}></div>

                            <h5 style={{fontSize: "20px"}}>Total  ${totalPrice.toFixed(2)}</h5>
                            <button className={style.proceed}>Proceed to Checkout</button>
                            <button className={style.btn} onClick={() => navigate(-1)}>&larr; Back to Shopping</button>

                        </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
