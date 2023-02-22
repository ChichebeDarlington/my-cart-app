import { FaCartPlus} from "react-icons/fa"
import { useGlobalContextHook } from "./context"

const Navbar = () => {

    const {amount} = useGlobalContextHook()

  return (
    <div className="navbar">
        <h1>Cart App</h1>
        <div className="cart">
        <FaCartPlus/>
        <span className="sum-cart">{amount}</span>
        </div>
    </div>
  )
}

export default Navbar