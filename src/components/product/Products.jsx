
// Import React and useState
import React, { useState } from 'react';
import Aside from '../aside/Aside';
import Main from '../main/Main';
import style from "./product.module.scss";

const Products = () => {
  // Using useState for managing selected brand, color, and sort option
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortBY, setSortBY] = useState("");

  return (
    <div>
      <div className={style.filter}>
      <header className={style.header} style={{ marginBottom: "0px" }}>
        <h4>Filter By:</h4>
        <select style={{ height: "30px" }} name="price" value={sortBY} onChange={(e) => setSortBY(e.target.value)}>
          <option value="">Sort By</option>
          <option value="cheap">cheap</option>
          <option value="expensive">expensive</option>
        </select>
      </header>
      </div>
      <div className={style.body_wrapper}>
        <div className={style.aside}>
          <Aside
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
        <div className={style.main_p}>
          <Main
            sortBY={sortBY}
            selectedBrand={selectedBrand}
            selectedColor={selectedColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;