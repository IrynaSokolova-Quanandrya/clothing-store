import { Component } from "react";
import CartOverlayItem from "../CartOverlayItem";
import s from "./CartOverlay.module.css";

export default class CartOverlay extends Component{
    render(){
        return(
            <div className={s.backdrop}>
            <div className={s.cartOverlay}>
                <p className={s.cartOverlay__title}>My Bag, <span className={s.cartOverlay__amount}>Total items</span></p>
                <ul className={s.cartOverlay__list}>
                    
                    <CartOverlayItem/>
                </ul>
                <div className={s.cartOverlay__total}>
                    <p className={s.total}>Total</p>
                    <p className={s.price}>$price</p>
                </div>
                <div className={s.cartOverlay__btn}>
                    <button type="button" className={s.btn}>VIEW BAG</button>
                    <button type="button" className={s.btn}>CHECK OUT</button>                    
                </div>
            </div>
            </div>
        )
    }
}