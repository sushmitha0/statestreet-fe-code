import React, { Component, PropTypes } from 'react';

export default class FilterGroup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { list, onFilterSelection, name } = this.props;
        return (
            <ul>
                {
                    list.map((filter, ind) => {
                        return (
                            <li key={ind}>
                                <div className="check-box">
                                    <input type="checkbox" value={filter.value} onChange={(e) => onFilterSelection(name, ind)} />
                                    <label>{filter.name}</label>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}