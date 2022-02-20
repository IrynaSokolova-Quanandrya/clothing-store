import React, {Component} from 'react';
import { connect } from 'react-redux';
import s from "./Card.module.css";
import {fetchById} from "../../redux/operations"

class Card extends Component{
    // componentDidMount(){
    //     this.props.onAddToCart(id)
    // }
    render(){
        // console.log('product:', );
        const {id, img, title, price} = this.props
        // console.log('img:', img[0]);
        return(
            <li className={s.card__item}>
                <img className={s.card__img} src={img[0]} alt={title}/>
                <h3 className={s.card__title}>{title}</h3>
                <p className={s.card__price}>{price[0].currency.symbol}{price[0].amount}</p>
                <button type="button" 
                onClick={this.props.onAddToCart(id)} 
                className={s.card__btn}></button>
            </li>
        )
    }
}

const mapDispatchToProps = state => {
    return{
        product: state.product
    }
} 
const mapDispatchToProps = (dispatch) => {
    return{
        onAddToCart: (id)=>dispatch(fetchById(id))
    }
}
export default connect(mapDispatchToProps, mapDispatchToProps)(Card)