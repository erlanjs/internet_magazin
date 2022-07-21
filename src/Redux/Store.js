import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import counterReduser from "./reducers/counterReduser";
import productReducer from "./reducers/productReducer";


const rootReducer =combineReducers({
    product: productReducer,
    counter: counterReduser
})

export const store =createStore( rootReducer , composeWithDevTools(applyMiddleware(thunk)))
