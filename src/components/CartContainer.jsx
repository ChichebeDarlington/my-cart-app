import React from 'react'
import CartItems from "./CartItems"
import {useGlobalContextHook} from "./context"

const CartContainer = () => {

const {total, clearAllCart, cart} = useGlobalContextHook()

  return (
    <div className=''>
        {cart.map(item=>{
          return  <CartItems {...item} key={item.id}/>
        })}
        <hr/>
        <div className='total'>
            <p className=''>Total :</p>
            <span className='price'>N{total}</span>
        </div>
        <div >
            <button className='clr' onClick={clearAllCart}>Clear Cart</button>
        </div>
    </div>
  )
}

export default CartContainer