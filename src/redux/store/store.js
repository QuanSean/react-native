const {createStore} = require ('redux')

const defaultState = {navigate:{}}
const reducer = (state, action)=>{
    if (action.type=="ADD_PROPS_NAVIGATE")
    {
        return {...state, navigate:action.navigate}
    }
    return state;
}

const store = createStore(reducer)

export default store