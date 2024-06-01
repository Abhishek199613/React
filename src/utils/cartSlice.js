import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        // These are reducer function which are map to the actions
        addItem: (state, action) => {
            // In the older version of the vanilla redux we cannot mutate the state and returning the state also mandatory

            //but in newer version we have to muatate the state
            // mutating the state here
            state.items.push(action.payload);
            //so in newer version BEHIND THE SCENES redux is also doing all thngs like making the state immutable 
            // using the library called immer.js which keeps the track of old state and new state and its difference and return the new state.
        },
        removeItem: (state) => {
            state.items.pop();
        },
        //let suppose original state = ["pizza"]
        clearCart: (state) => {
            console.log(current(state)) // to console log the current state
            state = [];
            console.log(state); // [] becam empty but not the original state but the local copy of it.

            state.items.length = 0; // that's why this is the correct method to mutate the state 

            //RTK says that ypu either mutate the state or return a new state
            // return a new state by ==> return {items: []};

        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;