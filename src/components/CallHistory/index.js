import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getCallHistory} from '../../services/contacts.js';

import './CallHistory.css';

class CallHistory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            history: null
        };
    }

    toggleHistory() {
        const isVisible = !this.state.isVisible;
        this.setState({ isVisible });

        if (!this.state.history && isVisible) {
            getCallHistory(this.props.contactId)
                .then(history => this.setState({ history }))
        }
    }

    renderList() {
        if(this.state.isVisible) {
            if(this.state.history && this.state.history.length > 0) {
                return this.state.history.map(item => <li key={item.timestamp}> {item.type} call: {item.timestamp} duration: {item.duration} sec </li>);
            } else {
                return <div> Call history is empty </div>;
            }
        }

        return null;
    }

    render() {
        return <div className="calls-history-wrapper">
            <button className="calls-history-button" onClick={() => this.toggleHistory()}>History of Calls</button>
            <div className="calls-history-info">
                {this.renderList()}
            </div>
        </div>;
    }
}

CallHistory.propTypes = {
    contactId: PropTypes.string
};

export default CallHistory;
