import { Component } from "react";
import s from "./CategoryPage.module.css";
import Card from '../../Card';
import api from '../../../serviceApi';

export default class CategoryPage extends Component{
    state = {
         
    }
    componentDidMount(){
        api.fetchDataForCard()
        .then(console.log())
    }
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