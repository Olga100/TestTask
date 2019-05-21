import React from 'react';
import PropTypes from 'prop-types';

import './ContactDetails.css';

function ContactDetails(props) {

    const {onEdit, onDelete, showCallHistory, callHistoryInfo} = props;
    const {id, firstName, lastName, phone, email} = props.contact;

    return <div className="contact-detail-container">
        <h4>Contact Detail Information</h4>
        <span className="title">First name:</span>
        <span>{firstName} </span>
        <span className="title">Last name:</span>
        <span>{lastName}</span>
        <span className="title">Phone:</span>
        <span>{phone}</span>
        <span className="title">Email:</span>
        <span>{email}</span>
        <div className="button-wrapper">
            <button onClick={onEdit}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
        <div className="calls-history-wrapper">
            <button className="calls-history-button" onClick={() => showCallHistory(id)}>History of Calls</button>
            <div className="calls-history-info">
                {callHistoryInfo}
            </div>
        </div>
    </div>;
}

ContactDetails.propTypes = {
    contact: PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

export default ContactDetails;
