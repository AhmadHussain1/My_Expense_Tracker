import {createContext, useReducer} from 'react';
import TransReducer from './TransReducer';

const initialTransactions = [
    {amount: 500, Desc: "Cash"},
    {amount: -50, Desc: "books"},
    {amount: -150, Desc: "easy load"},
]

export const transContext = createContext(initialTransactions);


export const TransProvider=({children}) => {

    let [state, dispatch] = useReducer(TransReducer,initialTransactions);

function addtransaction(transobj){
dispatch({
    type: "Add",
    payload: {
        amount: transobj.amount,
        Desc: transobj.Desc
    },

})

}
return(
    <transContext.Provider value={{
        transactions: state,
        addtransaction
    }}>
    </transContext.Provider>
)
}