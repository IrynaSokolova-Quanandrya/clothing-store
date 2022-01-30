import React, { Component } from "react";
import s from "./CardsList.module.css";
import Card from '../Card'

export default class CardsList extends Component{
    render(){
        return(
            <section className={s.cards__section}>
            <h2 className={s.cards__title}>Category name</h2>
            <ul className={s.cards__list}>
                <Card/>
            </ul>
            </section>
            
        )
    }
}