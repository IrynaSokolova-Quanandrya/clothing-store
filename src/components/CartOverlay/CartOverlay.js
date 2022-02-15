import { Component } from "react";
import image from '../../images/test.jpg';
import s from "./CartOverlay.module.css";

export default class CartOverlay extends Component{
    render(){
        return(
            <div className={s.cart-overlay}>
                <p className={s.cart-overlay__title}>My Bag, Total items</p>
                <ul className={s.cart-overlay__list}>
                    <li className={s.cart-overlay__item}>
                        <p>Product name</p>
                        <p>$price</p>
                        <form>
                            <fieldset>
                                <input type="radio" id="sizeChoice1" name="size" value={m}/>
                                <label for="sizeChoice1">M</label>
                                <input type="radio" id="sizeChoice2" name="size" value={s} checked/>
                                <label for="sizeChoice2">S</label>
                            </fieldset>
                        </form>
                        <div className={s.counter}>
                            <button type="button" className={s.counter__btn}>+</button>
                                <span className={s.counter__value}>1</span>
                            <button type="button" className={s.counter__btn}>-</button>
                        </div>
                        <img className={s.cart-overlay__img} src={image} alt='Foto'/> 
                    </li>
                </ul>
            </div>
        )
    }
}