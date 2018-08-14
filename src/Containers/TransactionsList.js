import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Filters from '../Components/Filters';
import Transactions from '../Components/Transactions';
import { getProductsList, onFilterChange } from '../Actions/actions';


export class TransactionsList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getProductsList();
    }
    onFilterSelection(type, ind) {
        this.props.onFilterChange(type, ind);
    }

    render() {
        const { filters, transactions } = this.props;
        return (
            <div className='container'>
                <div className='header'>
                    <h1>My Transactions</h1>
                </div>
                {transactions.length > 0 ?
                    <div className="content">
                        <Filters filters={filters} onFilterSelection={this.onFilterSelection.bind(this)} />
                        <Transactions transactions={transactions} />
                    </div> : <img className="spinner-img" src="http://traditionalanimalfoods.org/images/sys/spinner.gif" />
                }
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    getProductsList,
    onFilterChange
}, dispatch)

function mapStateToProps(state) {
    return {
        transactions: state.data.transactions,
        filters: state.data.filters
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionsList)


