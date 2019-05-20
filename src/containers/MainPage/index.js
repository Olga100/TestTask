import React, {Component} from 'react';
import {connect} from 'react-redux';

import ContactsList from '../../components/ContactsList';
import ContactDetails from  '../../components/ContactDetails';
import ContactDetailsForm from  '../../components/ContactDetailsForm';
import {loadContacts, loadSelectedContact, editDetails, endEditDetails} from '../../actions/actions';


import './MainPage.css';


class MainPageView extends Component {

    componentDidMount() {
        const {loadContacts} = this.props;
        loadContacts()
    }

    getSelectedContact = (id) => {
        const {loadSelectedContact} = this.props;

        loadSelectedContact(id);
    };


    renderDetails() {
        const {selectedContact, editDetails, endEditDetails, isEditingDetails} = this.props;

        if (selectedContact) {
            if (isEditingDetails) {
                return <ContactDetailsForm
                    initialValues={selectedContact}
                    onSubmit={() => console.log({selectedContact})}
                    onCancel={endEditDetails}/>;
            }
            else {
                return (<div>
                    <ContactDetails contact={selectedContact}/>
                    <div className="button-wrapper">
                        <button onClick={editDetails}>Edit</button>
                        <button onClick={null}>Delete</button>
                    </div>
                </div>);
            }
        }
        else {
            return null;
        }
    }

    render() {
        const {contacts}  = this.props;

        return (
            <div className="main-page-container">
                <div className="main-page-container__contact-list">
                    <ContactsList contacts={contacts} onContactSelected={this.getSelectedContact}/>
                </div>
                <div className="main-page-container__contact-detail">
                    {this.renderDetails()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    contacts: state.main.contacts,
    selectedContact: state.main.selectedContact,
    isEditingDetails: state.main.isEditingDetails,
});

const mapDispatchToProps = {
    loadContacts,
    loadSelectedContact,
    editDetails,
    endEditDetails
};

const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageView);

export default MainPage;
