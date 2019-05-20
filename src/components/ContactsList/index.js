import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../../components/ContactItem';

import './ContactsList.css';

class ContactsList extends Component {

    renderItems = () => {
        const {contacts, onContactSelected} = this.props;

        if (contacts && contacts.length > 0) {
            return contacts.map(item => <ContactItem key={item.id} contact={item} onContactSelected={onContactSelected} />);
        }
    };

    render() {
        return (
            <div className="contact-list-container">
                <header> <h3>List of contacts</h3> </header>
                <ol className="contact-list-wrapper">
                    {this.renderItems()}
                </ol>
            </div>
        );
    }
}

ContactsList.propTypes = {
    contacts: PropTypes.array,
    onContactSelected: PropTypes.func,
};

export default ContactsList;
