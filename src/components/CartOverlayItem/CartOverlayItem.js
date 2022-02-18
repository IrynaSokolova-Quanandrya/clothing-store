import { Component } from "react";
import image from '../../images/test.jpg';
import s from "./CartOverlayItem.module.css";

export default class CartOverlayItem extends Component{
    render(){
        return(
            <>
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
                </>
        )
    }
}