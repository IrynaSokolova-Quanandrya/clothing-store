import React, { Component } from "react";
import s from "./CategoryPage.module.css";
import Card from '../../Card';
// import api from '../../../serviceApi';
import {fetchAllProducts} from "../../../redux/operations"
import { connect } from "react-redux";

class CategoryPage extends Component{
    componentDidMount(){
        this.props.fetchProducts()
    }
        
    render(){
        const {products} = this.props;
        const data = products.products
        // console.log('data:', this.state.products);
        return(
            <section className={s.cards__section}>
            <h2 className={s.cards__title}>Category name</h2>
            <ul className={s.cards__list} >
            {data && data.map(({id, gallery, name, prices})=><Card 
                            key={id}
                            img={gallery}
                            title={name}
                            price={prices}
                            id={id}/>
            )
            }
            </ul>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchProducts: ()=>dispatch(fetchAllProducts()),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)