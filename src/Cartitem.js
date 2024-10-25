import {useSelector, useDispatch} from "react-redux";
import { removeItem} from "./cartSlice";
import { useNavigate } from "react-router-dom";
const CartItem=()=>{
    const cartData= useSelector((state)=>state.mycart.cart);
    const dispatch= useDispatch();
    const mynav= useNavigate();
    let netAmount=0;
     const ans=cartData.map((key)=>{
            netAmount+=key.price*key.qnty;
           return(
            <>
              <tr>
                <td> <img src={key.image} width="100"/></td>
                <td className="cart-txt"> {key.name} </td> 
                <td className="cart-txt"> ${key.price} </td>
                <td>  
                 <button className="p-but1" onClick={()=>{dispatch(removeItem(key.id))}}>Remove</button>   
                </td>
              </tr>
              <tr align="left">
                    </tr>
            </>
           )
     })


const BuyNow=()=>{
  mynav("/buynow");
}

    return(
        <>
         <br/>
          <center><h1 className="cart-product-name">Your Product List</h1></center>
                 <br/>
                 <table width="90%" align="center" >
                    <tr align="left" style={{backgroundColor:"purple",color:"whitesmoke"}}>
                        <th className="cart-up-txt"> Photo </th>
                        <th className="cart-up-txt"> Products Name</th>
                        <th className="cart-up-txt"> Price</th>
                        <th> </th>
                    </tr>
                    {ans}
                    <tr align="left">
                        <th> </th>
                        <th></th>
                        <th> </th>
                        <th> </th>
                    </tr>
                 </table>

              <br/> <br/>
             <center>
             <button className="cart-buy" onClick={BuyNow}> Buy Now </button>
             </center>
             <br/>
             <br/>
                
        </>
    )
}
export default CartItem;