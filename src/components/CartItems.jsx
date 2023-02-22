
import  {FaAngleDown, FaAngleUp}  from "react-icons/fa";
import { useGlobalContextHook } from "./context";

const CartItems = ({img, id, price, title, amount}) => {
    
    const {deleteItem,decrease, increase,} = useGlobalContextHook()

  return (
    <div className="cart-items">
        
        <div className="items-flex">
            <img src={img} alt="" />
            <div className="items-flex2">
                <p>{title}</p>
                <span>N{price}</span>
                <button className="btn" onClick={()=>deleteItem(id)}>remove</button>
          </div>
            <div className="icons">
            <FaAngleUp className="inc" onClick={()=>increase(id)}/>
            <p>{amount}</p>
            <FaAngleDown className="dec" onClick={()=>decrease(id)}/>
          </div>
        </div>
         
        
    </div>
  )
}

export default CartItems