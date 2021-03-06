import React,{Component} from "react";
import Auxilary from "../../hoc/Auxilary";
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }
    updatePurchaseState= (ingredients)=> {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }
    addIngredientHandldr =(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandldr =(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchaseCancleHandler=()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler=()=>{
        alert('You continued !');
    }
    render(){
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <=0;
        }
        //this new disabledInfo contains {salad:true,meat:false ..so on}
        return(
            <Auxilary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
                    <OrderSummary 
                        purchaseCancled={this.purchaseCancleHandler}
                        purchaseContinued={this.purchaseContinueHandler} 
                        ingredients={this.state.ingredients}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <Buildcontrols
                ingredientAdded={this.addIngredientHandldr}
                ingredientRemoved={this.removeIngredientHandldr}
                disabled = {disableInfo}
                purchasable = {this.state.purchasable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/>
            </Auxilary>

        );
    }
}

export default BurgerBuilder;