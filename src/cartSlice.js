import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cart:[]
}
const cartSlice= createSlice({
    name:"mycart",
    initialState:initialState,
    reducers:{
         addtoCart:(state, action)=>{
            let id=action.payload.id;
            let image=action.payload.image;          
            let name=action.payload.name;
            let price=action.payload.price;
            const myCart= state.cart.filter((key)=>key.id==action.payload.id);
            if (myCart.length>=1)
            {
                alert("Prodcut Aleready Added!!!");
            }
            else 
            {        
            state.cart.push({id:id, name:name, price:price, image:image, qnty:1});
            }
        
        },

       removeItem:(state, action)=>{
          state.cart=state.cart.filter((item)=>item.id!=action.payload);
       },

       cartEmpty:(state)=>{
        state.cart=[];
       }
    }
});

export const {addtoCart, removeItem, cartEmpty}= cartSlice.actions;
export default cartSlice.reducer;