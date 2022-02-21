import { Component } from "react";
import { connect } from "react-redux";
import s from "./CartOverlayItem.module.css";

class CartOverlayItem extends Component{
    render(){
        const {cartList} = this.props;
        return(
        <>
        {cartList.map(({brand, name, prices, gallery, attributes})=>
        <li className={s.cartOverlay__item}>
            <div>
                <p className={s.cartOverlay__prod}>{brand}</p>
                <p className={s.cartOverlay__prod}>{name}</p>
                <p className={s.cartOverlay__price}>{prices[0].currency.symbol}{prices[0].amount}</p>
                <button type="button" className={s.counter__btn}>{attributes[0].items[0].value}</button>
                <button type="button" className={s.counter__btn}>{attributes[0].items[1].value}</button>
            </div>
            <div className={s.counter}>
                <button type="button" className={s.counter__btn}>+</button>
                    <span className={s.counter__value}>1</span>
                <button type="button" className={s.counter__btn}>-</button>
            </div>
            <div>
                <img className={s.cartOverlay__img} src={gallery[0]} alt={name}/> 
            </div>
        </li>
        )}
        </>
        
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.products.cart);
       return{
       cartList: state.products.cart
}
   } 
export default connect(mapStateToProps, null)(CartOverlayItem)