import { Component } from "react";
import image from '../../images/test.jpg';
import s from "./CartOverlay.module.css";

export default class CartOverlay extends Component{
    render(){
        return(
            <div className={s.backdrop}>
            <div className={s.cartOverlay}>
                <p className={s.cartOverlay__title}>My Bag, Total items</p>
                <ul className={s.cartOverlay__list}>
                    <li className={s.cartOverlay__item}>
                        <p>Product name</p>
                        <p>$price</p>
                        <form>
                            <fieldset>
                                <input type="radio" htmlFor="sizeChoice1" name="size" value="m"/>
                                <label htmlFor="sizeChoice1">M</label>
                                <input type="radio" htmlFor="sizeChoice2" name="size" value='s'/>
                                <label htmlFor="sizeChoice2">S</label>
                            </fieldset>
                        </form>
                        <div className={s.counter}>
                            <button type="button" className={s.counter__btn}>+</button>
                                <span className={s.counter__value}>1</span>
                            <button type="button" className={s.counter__btn}>-</button>
                        </div>
                        <img className={s.cartOverlay__img} src={image} alt='Foto'/> 
                    </li>
                </ul>
                <div className={s.cartOverlay__total}>
                    <p>Total</p>
                    <p>$price</p>
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