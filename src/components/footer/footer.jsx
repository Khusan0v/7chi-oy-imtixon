import React from 'react'
import style from "../footer/footer.module.scss"
import GameGeekk from "/GameGeekk.svg"
import Twitter from "/Twitter.svg"
import In from "/In.svg"
import Facebook from "/Facebook.svg"
import Instagram from "/Instagram.svg"
import GG from "/GG.svg"
import Question from "/Question.svg"
import Boths from "/Boths.svg"


function footer() {
  return (
    <div className={style.footer}>
        <div className={style.footerMain}>
            <div className={style.logoLink}>

              <div className={style.first}>
                <div className={style.top}>
                <img src={GameGeekk} alt="GameGeek" />
                <p>START YOUR GAME <br />WITH THE BEST</p>
                </div>

                <div className={style.under}>
                  <img src={Twitter} alt="Twiiter" />
                  <img src={In} alt="In" />
                  <img src={Facebook} alt="Facebook" />
                  <img src={Instagram} alt="Instagram" />
                </div>

              </div>

              <div className={style.second}>
                <div className={style.links}>
                  <h3>Services</h3>
                  <ul>
                    <li>Gift Card</li>
                    <li>Mobile App</li>
                    <li>Shipping & Delivery</li>
                    <li>Order Pickup</li>
                    <li>Account Signup</li>
                  </ul>
                </div>
                <div className={style.links}>
                  <h3>Help</h3>
                  <ul>
                    <li>ShopCart Help</li>
                    <li>Returns</li>
                    <li>Track Orders</li>
                    <li>Contact Us</li>
                    <li>Feedback</li>
                    <li>Security & Fraud</li>
                  </ul>
                </div>                
                <div className={style.links}>
                  <h3>About Us</h3>
                  <ul>
                    <li>News & Blog</li>
                    <li>Help</li>
                    <li>Press Center</li>
                  </ul>
                </div>                
              </div>

            </div>
            <div className={style.third}>

              <div className={style.footerBor}></div>

              <div className={style.footerEnd}>
                <img src={GG} alt="GG" />
                <div className={style.bothf}>
                  <img src={Question} alt="Question" />
                  <p>Help Center</p>
                </div>
                <p>Privacy & Policy</p>
                <p>Terms of Service</p>
                <img src={Boths} alt="All rights reserved by GameGeek | 2023" />
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default footer