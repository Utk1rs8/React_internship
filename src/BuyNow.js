import {useSelector} from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BuyNow=()=>{
 
    const [input, setInput] = useState({});
    const [paymethod, setPaymethod]=useState("");
    const navigate= useNavigate();
    const cartData= useSelector((state)=>state.mycart.cart);


let proname;
let brand;
let price;
let totalamount;
let customerid;
const ans=cartData.map((key)=>{ 
    proname=key.name;
    brand=key.brand 
    price=key.price        
    totalamount=key.price*key.qnty;

 })

 const paymentDone=()=>{
    let url="http://localhost:4000/consumers";
    let customerID=Date.now()
    axios.post(url, {customer_id:customerID, Name:input.name, City:input.city, Contact:input.conno, Address:input.address})
    .then((res)=>{
        alert("custome save!!!");
    })
    



    navigate("/paydone");
}



const handleInput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setInput(values=>({...values, [name]:value}));
}






 return(
        <>
        <div className="buynow-maindiv">
        <br/> <br/>
        <center>
        <div className="address">
        <h1 className="cart-product-name"> Your Shipping Address</h1>
        <div className="buy-input"><h1 className="input-txt">Enter name :</h1><input type="text" name="name" value={input.name} className="in-txt" onChange={handleInput}/></div>
        <br/>
        <div className="buy-input"><h1 className="input-txt">Enter city: </h1><input type="text" name="city" value={input.city} className="in-txt" onChange={handleInput}/></div>
        <br/>
        <div className="buy-input"><h1 className="input-txt">Enter Contact no : </h1><input type="text" name="conno" value={input.conno} className="in-txt" onChange={handleInput}/></div>
        <br/>
        <div className="buy-input"><h1 className="input-txt">Enter Address : </h1><input type="text" name="address" value={input.address} className="in-txt" onChange={handleInput}/></div> 
        </div>
        
        </center>
          <br/> <br/>
        <center>
        <button className="make-payment" onClick={()=>{paymentDone()}}> Make Payment</button>
        </center>   
        <br/> <br/>
        </div>
        </>
    )
}

export default BuyNow;