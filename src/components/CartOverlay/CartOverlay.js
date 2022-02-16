import { Component } from "react";
import image from '../../images/test.jpg';
import s from "./CartOverlay.module.css";

export default class CartOverlay extends Component{
    render(){
        return(
            <div className={s.backdrop}>
            <div className={s.cartOverlay}>
                <p className={s.cartOverlay__title}>My Bag, <span className={s.cartOverlay__amount}>Total items</span></p>
                <ul className={s.cartOverlay__list}>
                    <li className={s.cartOverlay__item}>
                        <div>
                            <p className={s.cartOverlay__prod}>Apollo Running Short</p>
                            <p className={s.cartOverlay__price}>$price</p>
                            <form>
                                    <input className={s.custom__checkbox} type="radio" htmlFor="sizeChoice1" name="size" value="m"/>
                                    <label htmlFor="sizeChoice1"/>
                                    <input className={s.custom__checkbox} type="radio" htmlFor="sizeChoice2" name="size" value='s'/>
                                    <label htmlFor="sizeChoice2"/>
                            </form>
                        </div>
                        <div className={s.counter}>
                            <button type="button" className={s.counter__btn}>+</button>
                                <span className={s.counter__value}>1</span>
                            <button type="button" className={s.counter__btn}>-</button>
                        </div>
                        <div>
                            <img className={s.cartOverlay__img} src={image} alt='Foto'/> 
                        </div>
                    </li>
                    <li className={s.cartOverlay__item}>
                        <div>
                            <p className={s.cartOverlay__prod}>Apollo Running Short</p>
                            <p className={s.cartOverlay__price}>$price</p>
                            <form>
                                    <input className={s.custom__checkbox} type="radio" htmlFor="sizeChoice1" name="size" value="m"/>
                                    <label htmlFor="sizeChoice1"/>
                                    <input className={s.custom__checkbox} type="radio" htmlFor="sizeChoice2" name="size" value='s'/>
                                    <label htmlFor="sizeChoice2"/>
                            </form>
                        </div>
                        <div className={s.counter}>
                            <button type="button" className={s.counter__btn}>+</button>
                                <span className={s.counter__value}>1</span>
                            <button type="button" className={s.counter__btn}>-</button>
                        </div>
                        <div>
                            <img className={s.cartOverlay__img} src={image} alt='Foto'/> 
                        </div>
                    </li>
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