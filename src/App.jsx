import CartContainer from "./components/CartContainer"
import Navbar from "./components/Navbar"
import { useGlobalContextHook } from "./components/context"
import IsLoading from "./components/IsLoading"


function App() {
  const {isLoading, cart} = useGlobalContextHook()

  if(isLoading){
    return <IsLoading/>
  }

  return (
    <div className="App">
      {cart.length === 0? (
        <div className="empty-cart">
        <h3 >Oops, empty cart</h3>
        <p className="">Please add items to your cart</p>
        </div>
        ):(
        <>
      <Navbar/>
      <CartContainer/>
        </>
      )}
      
    </div>
  )
}

export default App
