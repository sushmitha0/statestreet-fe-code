import * as types from '../constants/ActionTypes';
import getJSONData from '../Api/getJsonData';



export function getProductsList() {
    return (dispatch, getState) => {
        getJSONData((data) => {
            const filters = getState().data.filters;
            const transactions = data.transactions;
            transactions.forEach(function (obj) {
                if (filters.accountNames.length) {
                    const accountnames = filters.accountNames.filter(value => {
                        return obj.accountName === value.name;
                    })
                    if (accountnames.length === 0) {
                        filters.accountNames.push({
                            name: obj.accountName,
                            value: false
                        });
                    }
                } else {
                    filters.accountNames.push({
                        name: obj.accountName,
                        value: false
                    });
                }
                if (filters.transactionTypes.length) {
                    const transactionTypes = filters.transactionTypes.filter(value => {
                        return obj.transactionType === value.name;
                    })
                    if (transactionTypes.length === 0) {
                        filters.transactionTypes.push({
                            name: obj.transactionType,
                            value: false
                        });
                    }
                } else {
                    filters.transactionTypes.push({
                        name: obj.transactionType,
                        value: false
                    });
                }
            });
            dispatch({
                type: types.FETCH_TRANSACTIONS,
                transactions: data.transactions,
                filters: filters
            })
        });
    }
}


export function onFilterChange(type, ind) {
    return (dispatch, getState) => {
        const filters = getState().data.filters;
        const allTransactions = getState().data.totalTransactions;
        let accoutsList = [];
        let filteredList = [];
        filters[type][ind].value = !filters[type][ind].value;
        const accountNames = [];
        const transactionTypes = [];
        filters.accountNames.forEach(obj => {
            if (obj.value) {
                accountNames.push(obj.name);
            }
        });
        filters.transactionTypes.forEach(obj => {
            if (obj.value) {
                transactionTypes.push(obj.name);
            }
        });
        if (accountNames.length) {
            accoutsList = allTransactions.filter(obj => {
                return accountNames.indexOf(obj.accountName) > -1;
            })
        } else {
            accoutsList = allTransactions;
        }

        if (transactionTypes.length) {
            filteredList = accoutsList.filter(obj => {
                return transactionTypes.indexOf(obj.transactionType) > -1;
            })
        } else {
            filteredList = accoutsList;
        }

        dispatch({
            type: types.FILTER_TRANSACTIONS,
            transactions: filteredList,
            filters: filters
        })
    }

}