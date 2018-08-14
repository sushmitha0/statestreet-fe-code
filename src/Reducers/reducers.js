import * as types from '../constants/ActionTypes';
const initialState = {
    transactions: [],
    totalTransactions: [],
    filters: {
        accountNames: [],
        transactionTypes: []
    }
};

export default function transactionsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_TRANSACTIONS:
            return {
                ...state,
                transactions: [...action.transactions],
                totalTransactions: [...action.transactions],
                filters: { ...action.filters }
            };
        case types.FILTER_TRANSACTIONS:
            return {
                ...state,
                transactions: [...action.transactions],
                filters: { ...action.filters }
            }
        default:
            return state;
    }
}
