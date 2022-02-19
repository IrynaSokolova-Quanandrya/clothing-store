import { Component } from "react";
import s from "./CategoryPage.module.css";
import Card from '../../Card';
import api from '../../../serviceApi';

export default class CategoryPage extends Component{
    state = {
         products: null,
         currency: null
    }
    
    componentDidMount(){
        api.fetchDataForCard()
        .then((result)=> this.setState({products:result}))
    }
    
    render(){
        const {products, currency} = this.state;
        console.log('products:', products);
        // console.log('currency:', currency);
        return(
            <section className={s.cards__section}>
            <h2 className={s.cards__title}>Category name</h2>
            <ul className={s.cards__list} >
            {products && products.map(({id, gallery, name, prices})=><Card 
                            key={id}
                            img={gallery}
                            title={name}
                            price={prices}
            />
        )               
            }
            </ul>
            </section>
        )
    }
}