export const CartReducer = (state, action) => {

    switch(action.type) {

        case "Add" :
            return {...state, cart:[...state.cart, {...action.payload, qty: 1}]}
        
        case "Remove" :
            return {...state, cart: state.cart.filter(c => c.id !== action.payload.id)}

        default:
            return state;
    }
}