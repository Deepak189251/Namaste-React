export const CartReducer = (state, action) => {

    switch(action.type) {

        case "Add" :
            return {...state, cart:[...state.cart, {...action.payload, qty: 1}]}
        
        case "Remove" :
            return {...state, cart: state.cart.filter(c => Number(c.id) !== Number(action.payload.id))}

        case "Increment_Qty" :
            return {...state, cart: state.cart.filter((c) => Number(c.id) === Number(action.payload.id) ? c.qty += 1 : c.qty)}

        case "Decrement_Qty" : 
            return {...state, cart: state.cart.filter((c) => Number(c.id) === Number(action.payload.id) ? c.qty -= 1 : c.qty)}

        default:
            return state;
    }
}