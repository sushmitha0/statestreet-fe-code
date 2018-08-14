import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Filters from '../Components/Filters';
import Transactions from '../Components/Transactions';
import { getProductsList } from '../Actions/actions';


export class TransactionDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.transactions.length === 0) {
            this.props.getProductsList();
        }
    }

    render() {
        const { transactions } = this.props;
        let transactionDetails = {};
        if (transactions.length) {
            const transaction = transactions.filter(obj => {
                return obj.account === this.props.match.params.id
            })
            transactionDetails = transaction[0];
        }
        return (
            <div className='container'>
                <h1>Transaction {transactionDetails.account} </h1>
                {
                    transactionDetails.account && Object.keys(transactionDetails).map(obj => {
                        return (<p className="details" key={obj}>
                            <label>{obj}:</label>
                            <span>{transactionDetails[obj]}</span>
                        </p>
                        )
                    })
                }
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    getProductsList
}, dispatch)

function mapStateToProps(state) {
    return {
        transactions: state.data.transactions,
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionDetails)


