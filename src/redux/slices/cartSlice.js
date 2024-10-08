import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cartQuantity: 0,
    cartProducts: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartQuantity += 1;
      const productToBeAdded = action.payload;

      const reqProduct = state.cartProducts.find(
        (cProduct) => cProduct.id === productToBeAdded.id
      );

      if (!reqProduct) {
        // Initialize individualQuantity when adding a new product
        state.cartProducts.push({
          ...productToBeAdded,
          individualQuantity: 1
        });
      } else {
        // Increment the quantity if the product already exists
        reqProduct.individualQuantity++;
      }
    },
    deleteFromCart: (state, action) => {
      const productToBeRemoved = action.payload;
      const productIdx = state.cartProducts.findIndex(
        (cProduct) => cProduct.id === productToBeRemoved.id
      );

      if (productIdx !== -1) {
        let product = state.cartProducts[productIdx];
        
        // Decrement cart quantity
        state.cartQuantity--;

        if (product.individualQuantity > 1) {
          // Decrease the product's quantity
          product.individualQuantity--;
        } else {
          // Remove the product if the quantity becomes 0
          state.cartProducts.splice(productIdx, 1);
        }
      }
    }
  }
});

export const action = cartSlice.actions;
export default cartSlice;
