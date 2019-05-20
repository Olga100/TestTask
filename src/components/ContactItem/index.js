import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ContactItem.css';

class ContactItem extends Component {
    render() {
        const {id, firstName, lastName } = this.props.contact;
        const onContactSelected = this.props.onContactSelected;
        return (
            <li className="contact-info" onClick={() => onContactSelected(id)}>
                <span>{firstName} </span>
                <span>{lastName}</span>
            </li>
        )
    }
}

ContactItem.propTypes = {
    contact: PropTypes.object,
    onContactSelected: PropTypes.func,
};

export default ContactItem;
