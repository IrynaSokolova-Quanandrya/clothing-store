import React, {Component} from 'react';
import s from "./Card.module.css";
import image from '../../images/test.jpg'

export default class Card extends Component{
    render(){
        return(
            <>
            <li className={s.card__item}>
                <img className={s.card__img} src={image} alt='Foto'/>
                <h3 className={s.card__title}>title</h3>
                <p className={s.card__price}>price</p>
            </li>
            <li className={s.card__item}>
                <img className={s.card__img} src={image} alt='Foto'/>
                <h3 className={s.card__title}>title</h3>
                <p className={s.card__price}>price</p>
            </li>
            <li className={s.card__item}>
                <img className={s.card__img} src={image} alt='Foto'/>
                <h3 className={s.card__title}>title</h3>
                <p className={s.card__price}>price</p>
            </li>
            <li className={s.card__item}>
                <img className={s.card__img} src={image} alt='Foto'/>
                <h3 className={s.card__title}>title</h3>
                <p className={s.card__price}>price</p>
            </li>
            <li className={s.card__item}>
                <img className={s.card__img} src={image} alt='Foto'/>
                <h3 className={s.card__title}>title</h3>
                <p className={s.card__price}>price</p>
            </li>
            <li className={s.card__item}>
                <img className={s.card__img} src={image} alt='Foto'/>
                <h3 className={s.card__title}>title</h3>
                <p className={s.card__price}>price</p>
            </li>
            </>
        )
    }
}