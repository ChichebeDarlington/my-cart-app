// const reducer = (state, action) => {
//     if (action.type === 'CLEAR_ALL_CART') {
//       return { ...state, cart: [] }
//     }
//     if (action.type === 'DELETE_ITEM') {
//       return {
//         ...state,
//         cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
//       }
//     }
//     if (action.type === 'INCREASE_ITEM') {
//       let tempCart = state.cart.map((cartItem) => {
//       console.log(cartItem.amount);
//         if (cartItem.id === action.payload) {
//           return { ...cartItem, amount: cartItem.amount + 1 }
//         }
//         return cartItem
//       })
//       return { ...state, cart: tempCart }
//     }
//     if (action.type === 'DECREASE_ITEM') {
//       let tempCart = state.cart
//         .map((cartItem) => {
//             console.log(cartItem);
//           if (cartItem.id === action.payload) {
//             return { ...cartItem, amount: cartItem.amount - 1 }
//           }
//           return cartItem
//         })
//   return {...state, cart:tempCart}
//     }
// }

// export default reducer



const reducer = (state, action)=>{

    switch(action.type){

        case "CLEAR_ALL_CART":
            return {...state, cart:[]}

            case "DELETE_ITEM":
                return {...state, cart:state.cart.filter(single=>{
                    return single.id !== action.payload
                })}

                case "DECREASE_ITEM":
                    let tempCart = state.cart.map((cartItem) => {
                        if (cartItem.id === action.payload) {
                          return { ...cartItem, amount: cartItem.amount - 1 }
                        }
                        return cartItem
                      }).filter(cartItem=>{
                        return cartItem.amount !== 0
                    })
                      return { ...state, cart: tempCart }

                    case "INCREASE_ITEM":
                        let incCart = state.cart.map(cartItem=>{
                            if(cartItem.id === action.payload){
                                return {...cartItem, amount: cartItem.amount + 1}
                            }
                            return cartItem
                        })
                        return {...state, cart:incCart}

                        case "TOTAL_ITEMS":
                         let {total, amount} = state.cart.reduce((totalCart, cartItem)=>{
                            // console.log(cartItem);

                            const {price, amount} = cartItem
                            const totalItem = amount * price
                            totalCart.total += totalItem
                            totalCart.amount += amount

                            return totalCart
                         },{
                            total:0,
                            amount:0
                         })
                         total = parseFloat(total.toFixed(3))
                         return {...state, total, amount}

                         case "ISLOADING":
                            return {...state, isLoading:true}

                        case "DISPLAY_DATA":
                            return {...state, cart:action.payload, isLoading:false}
                        

         default:
            return state
    }

}


export default reducer