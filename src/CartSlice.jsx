import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}, // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {  
      const { payload: index } = action;
      console.log("addItem", state)
      console.log("addItem", action)
    },
    removeItem: (state, action) => { 
      const { payload: index } = action;
      if (items[index].quantity > 0) {
        //dispatch(decrementQuantity(index)); 
        console.log("removeItem", state[index])
        array.splice(index, 1);
        console.log("removeItem", state)
      }
    },
    incrementQuantity: (state, action) => { 
      const { payload: item } = action;

      if (!state[item.name]) { 
        console.log("item not found") 
        state[item.name] = item
        state[item.name].quantity = 1 
      }
      else {
        console.log("item found", state[item.name].quantity) 
        state[item.name].quantity = state[item.name].quantity  + 1; 
      } 

      console.log("incrementQuantity", state[item.name].quantity ) 
    },
    decrementQuantity: (state, action) => { 
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
        console.log("decrementQuantity", state[index])
      }  
    }
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
