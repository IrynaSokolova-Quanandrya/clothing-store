import React from "react";
import s from './Header.module.css'

export default function Header(){
    return(
        <header className={s.header}>
            <div>
            <nav className={s.nav}>
                <ul className={s.nav__list}>
                    <li className={s.nav__item}>
                        <a href="/" className={s.current}>Women</a>
                    </li>
                    <li className={s.nav__item}>
                        <a href="/" className={s.nav__link}>Men</a>
                    </li>
                    <li className={s.nav__item}>
                        <a href="/" className={s.nav__link}>Kids</a>
                    </li>
                </ul>
            </nav>            
            </div>    
                <a href="/" className={s.logo}>logo</a>
                <div className={s.buttons}>
                    <button type="button" className={s.currency__btn}>$</button>
                    <button type="button" className={s.cart__btn}></button>
                </div>
            

        </header>
    )
}