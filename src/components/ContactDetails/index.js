import React from 'react';
import PropTypes from 'prop-types';

import './ContactDetails.css';

function ContactDetails(props) {
    const {firstName, lastName, phone, email} = props.contact;

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
    </div>;
}

ContactDetails.propTypes = {
    contact: PropTypes.object
};

export default ContactDetails;
