import { Component } from "react";
import { connect } from "react-redux";
import CartOverlayItem from "../CartOverlayItem";
import s from "./CartOverlay.module.css";

class CartOverlay extends Component{

    // getTotalPrice(){        
    //     let total = 0;
    //     const {cartList} = this.props;
    //     const {prices} = cartList;
    //     cartList.map(prod=>console.log(prod))

    // }
    
    render(){
        this.getTotalPrice()
        return(
            <div className={s.backdrop}>
            <div className={s.cartOverlay}>
                <p className={s.cartOverlay__title}>My Bag, <span className={s.cartOverlay__amount}>Total items</span></p>
                <ul className={s.cartOverlay__list}>
                    
                    <CartOverlayItem key={this.props.id}/>
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

const mapStateToProps = (state) => {
       return{
       cartList: state.products.cart
}
   }
export default connect(mapStateToProps, null)(CartOverlay)