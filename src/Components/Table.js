import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class Table extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Account Name</th>
                        <th>Currency</th>
                        <th>Amount</th>
                        <th>TrnsactionType</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((obj, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <Link to={`/${obj.account}`}>{obj.account}</Link>
                                    </td>
                                    <td>{obj.accountName}</td>
                                    <td>{obj.currencyCode}</td>
                                    <td>{obj.amount}</td>
                                    <td>{obj.transactionType}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )

    }
}
