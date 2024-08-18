  import React from 'react';
  import style from "./home.module.scss";
  import Products from '../product/Products';

  function Home() {
    return (
      <>

        <div className={style.home}>
          <div className={style.heroImg}>
            <div className={style.text}>
              <p>/ Start / Categories <br /> / Headphones and Audio for gaming</p>
              <h1>Headphones AND AUDIO <br /> FOR GAMING</h1>
            </div>
          </div>
        </div>
        <Products/>
      </>
    );
  }

  export default Home;