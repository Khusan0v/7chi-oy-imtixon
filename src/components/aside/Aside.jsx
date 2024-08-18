import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    saveBrands, saveColors,
    setBrandLoading, setBrandError,
    setColorLoading, setColorError
} from '../store/productSlice';
import style from "./aside.module.scss"

const Aside = ({ selectedBrand, setSelectedBrand, selectedColor, setSelectedColor }) => {
    const dispatch = useDispatch();
    const { brands, colors, brandLoading, colorLoading } = useSelector(state => state.products);

    useEffect(() => {
        async function fetchBrands() {
            dispatch(setBrandLoading(true));
            try {
                const response = await fetch("https://headphones-server.onrender.com/brands");
                if (!response.ok) {
                    throw new Error("Error fetching brands");
                }
                const data = await response.json();
                dispatch(saveBrands(data));
            } catch (error) {
                dispatch(setBrandError(error.message));
            } finally {
                dispatch(setBrandLoading(false));
            }
        }
        fetchBrands();
    }, [dispatch]);

    useEffect(() => {
        async function fetchColors() {
            dispatch(setColorLoading(true));
            try {
                const response = await fetch("https://headphones-server.onrender.com/colors");
                if (!response.ok) {
                    throw new Error("Error fetching colors");
                }
                const data = await response.json();
                dispatch(saveColors(data));
            } catch (error) {
                dispatch(setColorError(error.message));
            } finally {
                dispatch(setColorLoading(false));
            }
        }
        fetchColors();
    }, [dispatch]);

    return (
        <div>
            <div className={style.border}></div>
            <ul style={{ width: "350px", display: "flex", flexWrap: "wrap",   marginLeft: "73px" }}>
                <h3>BRAND</h3>
                <strong style={{ display: "flex", width: "300px", alignItems: "start", gap: "22.5px", flexDirection: "column"}}>
                    {brandLoading && <p>Brand Loading... </p>}
                    {brands.map((brand, index) => (
                        <li className={style.asideLi} key={index}>
                            <input 
                                type="checkbox"
                                id={brand}
                                name={"brand"}
                                onChange={() => setSelectedBrand(brand)}
                                checked={selectedBrand === brand}
                            />
                            <label htmlFor={brand}>{brand}</label>
                            </li>
                    ))}
                    
                    <button className={style.buttonAside} onClick={() => setSelectedBrand("")}>Reset</button>
                    <div className={style.border}></div>

                </strong>
                
                
                
                <h3>Colors</h3>
                <strong style={{ display: "flex", width: "300px", alignItems: "start", gap: "30px",  flexWrap: "wrap" }}>
                {colorLoading && <p>Color Loading...</p>}
                {colors.map((color, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setSelectedColor(color)}
                            style={{
                                width: "20px",
                                height: "20px",
                                border: "solid 1px",
                                borderRadius: "50%",
                                cursor: "pointer",
                                backgroundColor: color,
                                outlineOffset: "3px",
                                outline: selectedColor === color ? "1px solid red" : "",
                            }}
                        ></button>
                    </li>
                ))}
                <button className={style.buttonAside} onClick={() => setSelectedColor("")}>Reset</button>
                </strong>

                <div className={style.connect}>
                <div className={style.border}></div>

                    <h3>CONNECTIVITY</h3>
                    <div>
                        <span>
                            <input  type="checkbox"    />
                            <p>2.4 GHz wireless technology</p>
                        </span>
                        <span>
                            <input  type="checkbox"   />
                            <p>3.5mm audio input</p>
                        </span>
                        <span>
                            <input  type="checkbox"   />
                            <p>Bluetooth</p>
                        </span>
                        <span>
                            <input  type="checkbox" />
                            <p>LIGHTSPEED wireless <br /> technology</p>
                        </span>
                        <span>
                            <input  type="checkbox"   />
                            <p>Wired USB input</p>
                        </span>
                        <span>
                            <input type="checkbox"  />
                            <p>USB-C</p>
                        </span>
                        <button className={style.buttonAside}>Reset</button>

                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Aside;
