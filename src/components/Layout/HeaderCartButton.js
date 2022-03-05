import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from './../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setButtonIsHighlighted] = useState(false)
    const cartCtx  = useContext(CartContext)
    const { items } = cartCtx
    const noOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount
    }, 0)
    const btClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }
        setButtonIsHighlighted(true)
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={btClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {noOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton