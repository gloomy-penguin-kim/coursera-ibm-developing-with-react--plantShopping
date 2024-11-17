import { createSlice } from '@reduxjs/toolkit';
 

export const CartSlice = createSlice({
  name: 'cart',
  initialState: { 
    items: [] 
  },
  reducers: { 
    removeCartSliceItem: (state, action) => { 
      const { payload: item } = action;     

      let index = null 
      state.items.forEach( (i, ii) => {
        if (i.name === item.name) index = ii 
      })

      state.items.splice(index, 1);   
    },
    addCartSliceItem(state, action) { 
      const { payload: item } = action;     

      state.items.push(item) 
    },
    incrementQuantity: (state, action) => {  
      const { payload: item } = action;   

      const existingItem = state.items.find(iitem => iitem.name === item.name);

      if (existingItem) {
        existingItem.quantity++ 
      }
      else { 
        item.quantity = 1 
        state.items.push(item) - 1  
      }   
   },
    updateCartSliceItem: (state, action) => { 
      const { payload: item } = action;   

      let index = null 
      state.items.forEach( (i, ii) => {
        if (i.name === item.name) index = ii 
      })
      const existingItem = state.items.find(iitem => iitem.name === item.name);

      if (existingItem) 
        existingItem = item
      else
        state.items.push(item)  
    },
    decrementQuantity: (state, action) => {
      const { payload: item } = action;   
          
      let index = null 
      state.items.forEach( (i, ii) => {
        if (i.name === item.name) index = ii 
      }) 

      if (index != null) { 
        if (state.items[index].quantity > 0) 
          state.items[index].quantity--
        else
          state.items.splice(index, 1)  
      }

  },
}});

export const { addCartSliceItem, removeCartSliceItem, 
  updateCartSliceItem, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
