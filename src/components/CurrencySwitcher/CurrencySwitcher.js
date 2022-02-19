import { Component } from "react";
import s from "./CurrencySwitcher.module.css";

export default class CurrencySwitcher extends Component{
    changeCurrency(e){
console.log(e);
    }
    render(){
        return(
            <div className={s.currency}>
                <ul className={s.currency__list}>
                    <li className={s.currency__item}>
                        <button  onClick={this.changeCurrency} type="button" className={s.currency__btn}>$ USD</button>
                    </li>
                    <li className={s.currency__item}>
                        <button type="button" className={s.currency__btn}>€ EUR</button>
                    </li>
                    <li className={s.currency__item}>
                        <button type="button" className={s.currency__btn}>¥ JPY</button>
                    </li>
                </ul>
            </div>
        )
    }
}