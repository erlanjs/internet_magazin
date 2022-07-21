import update from "immutability-helper"


const defaulftState = {
    counter : 0,
    users: []
}


const ADD_COUNTER = "ADD_COUNTER"
const ADD_USER = "ADD_USER"


const counterReduser = (state = defaulftState, action) => {
    switch (action.type){
        case ADD_COUNTER:
            return update(state, {counter : {$set: 1}});
        default:
            return state
    }
}


// const counterReduser = (state = defaulftState, action) => {
//     switch (action.type){
//         case ADD_COUNTER:
//             return {...state, counter: state.counter}
//     }
// }



export default counterReduser;