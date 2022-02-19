import React, {Component} from 'react';
import s from "./Card.module.css";
// import image from '../../images/test.jpg'

export default class Card extends Component{
    // chooseImg({img}){
    // img.length > 1 ?
    // img[0] :
    // img
    // }
    render(){
        const {img, title, price} = this.props
        // console.log('img:', img[0]);
        return(
            <li className={s.card__item}>
                <img className={s.card__img} src={img[0]} alt={title}/>
                <h3 className={s.card__title}>{title}</h3>
                <p className={s.card__price}>{price[0].currency.symbol}{price[0].amount}</p>
            </li>
        )
    }
}