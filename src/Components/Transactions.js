import React, { Component, PropTypes } from 'react';
import Table from './Table';

export default class Transactions extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { transactions } = this.props;
        return (
            <Table data={transactions} />
        )

    }
}
