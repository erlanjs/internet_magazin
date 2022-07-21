import update from "immutability-helper"

const defaultState = {
    catalog: [] ,
    counter: 0 ,
    users: [],
    card: [],
    rated: [],
    color: [],
    rates: {},
    toggleRates: [1]
}

export const ADD_CARD = "ADD_CATALOG"
export const GET_CATALOG = "GET_CATALOG"
export const ADD_QUANTITY = "ADD_QUANTITY"
export const ADD_RATED = "ADD_RATED"
export const REMOVE_RATED = "REMOVE_RATED"
export const GET_RATES = "GET_RATES"
export const PUSH_RESET = "PUSH_RESET"
export const ADD_COUNTER = "ADD_COUNTER"
export const ADD_USER = "ADD_USER"


const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CARD:
            const findProduct = state.card.find(el => el.id === action.payload.id)

            if (findProduct){
                return {...state , card: state.card.map(el => el.id === action.payload.id ?
                        {...el ,
                            quantity: el.quantity + 1
                        } : el)
                }
            }
            return {...state, card: [...state.card, {...action.payload , quantity: 1}]}
        case ADD_QUANTITY:
            const product = state.card.find(el => el.id === action.payload[1].id)
            console.log(product, action.payload)
            if (product){
                return {...state , card: state.card.map(el => el.id === action.payload[1].id ?
                        {...el ,
                            quantity: +(action.payload[0])
                        } : el)
                }
            }
            console.log(action.payload)
            return {...state, card: [...state.card, {...action.payload , quantity: +(action.payload[0])}]}
        case ADD_RATED:
            const findColor =  state.rated.find(el => el.id === action.payload.id)
            if (findColor) {
                return {...state , rated: state.rated.map(el => el.id === action.payload.id ?
                        {
                            ...el ,
                                color: 'red'
                        } : el
                    )}
            }
            console.log(state.rated)
            return {...state, rated: [...state.rated, {...action.payload , color: "red"}]}
        case REMOVE_RATED:
            return {...state , rated: state.rated.filter((el,id) => el.id !== action.payload.id)}
        case GET_RATES:
            console.log(state.rates)
            return {...state , rates: action.payload}
        case PUSH_RESET:
            return {...state , toggleRates: [state.rates[`${action.payload}`]]}
        case ADD_COUNTER:
            return update(state, {counter : {$set: state.counter + 1 }});
            // return {...state, counter: state.counter + 1};
        case ADD_USER:
            return update(state, {users : {$push: [action.payload] }});
            // return {...state, users: [...state.users, action.payload]};

        default:
            return state
    }

}


export default productReducer