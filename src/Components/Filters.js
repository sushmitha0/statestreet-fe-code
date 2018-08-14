import React, { Component, PropTypes } from 'react';
import FilterGroup from './FilterGroup';

export default class Filters extends Component {
    static propTypes = {
        actions: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    onFilterSelection() {

    }
    render() {
        const { filters, onFilterSelection } = this.props;
        const { transactionTypes, accountNames } = filters;
        return (
            <div className="filters">
                <div className="filter-group">
                    <h3>AccountNames</h3>
                    <FilterGroup list={accountNames} name='accountNames' onFilterSelection={onFilterSelection} />
                </div>
                <div className="filter-group">
                    <h3>TransactionTypes</h3>
                    <FilterGroup list={transactionTypes} name='transactionTypes' onFilterSelection={onFilterSelection} />
                </div>
            </div>
        )
    }

}