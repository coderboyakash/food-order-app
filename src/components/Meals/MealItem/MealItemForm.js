import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true)
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if(enteredAmountNumber.length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{ 
                    id:'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                 }}
            />
            {!amountIsValid && <p>Please enter a valid amount</p>}
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm