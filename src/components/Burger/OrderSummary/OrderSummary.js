import React from 'react';
import Auxilary from '../../../hoc/Auxilary';   

const OrderSummary=(props)=>{
    const ingredientsSummary= Object.keys(props.ingredients)
    .map(igKey=>{
        return (
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>
                : {props.ingredients[igKey]}
        </li>
        );
    })
    
    return (
    <Auxilary>
        <h3>Your order</h3>
        <p>Delicious burger you ordered</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p>Continue to check out</p>
    </Auxilary>
    )}
export default OrderSummary;