import React, { Component } from "react";
import CartOverlay from "../CartOverlay/CartOverlay";
import CurrencySwitcher from "../CurrencySwitcher";
import s from './Header.module.css'

export default class Header extends Component {
    state = {
        visible: false,
        showModal: false
    }

    toggleCurrency = () => {
        this.setState(prev=>({
            visible: !prev.visible
        }))
    }
    toggleCart = () => {
        this.setState(prev=>({
            showModal: !prev.showModal
        }))
    }
    render(){
    return(
        <header className={s.header}>
            <div>
            <nav className={s.nav}>
                <ul className={s.nav__list}>
                    <li className={s.nav__item}>
                        <a href="/" className={s.current}>All</a>
                    </li>
                    <li className={s.nav__item}>
                        <a href="/" className={s.nav__link}>Clothes</a>
                    </li>
                    <li className={s.nav__item}>
                        <a href="/" className={s.nav__link}>Tech</a>
                    </li>
                </ul>
            </nav>            
            </div>    
                <a href="/" className={s.logo}>logo</a>
                <div className={s.buttons}>
                    <button type="button" onClick={this.toggleCurrency} className={s.currency__btn}>$</button>
                    {this.state.visible && <CurrencySwitcher/>}
                    <button type="button" onClick={this.toggleCart} className={s.cart__btn}></button>
                    {this.state.showModal && <CartOverlay/>}
                </div>
            

        </header>
    )
    }
}