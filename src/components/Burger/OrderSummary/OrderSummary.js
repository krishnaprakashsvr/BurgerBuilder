import React from 'react';
import Auxilary from '../../../hoc/Auxilary';   
import Button from '../../UI/Button/Button'

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
        <Button btnType='Danger' click={props.purchaseCancled}>CANCLE</Button>
        <Button btnType='Success' click={props.purchaseContinued}>CONTINUE</Button>
    </Auxilary>
    )}
export default OrderSummary;