import React, { useState, useContext, useReducer, useEffect, createContext } from 'react'
import cartItems from './data'
import reducer from './reducer'


const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = createContext()

const initialState = {
  isLoading: false,
  cart: cartItems,
  total: 0,
  amount: 1,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearAllCart = () => {
    dispatch({ type: 'CLEAR_ALL_CART' })
  }

  const deleteItem = (singleId)=>{
    dispatch({type:"DELETE_ITEM", payload:singleId})
  }

  const decrease = (id)=>{
    dispatch({type:"DECREASE_ITEM", payload:id})
    console.log("dec");
  }

  const increase = (id)=>{
    dispatch({type:"INCREASE_ITEM", payload:id})
    console.log("inc");
  }

  useEffect(()=>{
    dispatch({type:"TOTAL_ITEMS"})
  },[state.cart])

useEffect(()=>{
  fetchItems()
},[])

// useEffect(()=>{
//   handleRefresh()
// },[state.cart])

const fetchItems = async()=>{
  dispatch({type:"ISLOADING"})
  const res = await fetch(url, {
    method: 'GET',
    body: JSON.stringify(),
    headers: {
      'Content-type' : 'application/json'
    }
  })
  const data = await res.json()
  dispatch({type:"DISPLAY_DATA", payload:data})
}

const handleRefresh = async()=>{
  if(state.cart.length === 0){
    fetchItems()
  }
  // fetchItems()
}

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAllCart,
        deleteItem,
        increase,
        decrease,
        handleRefresh
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContextHook = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
