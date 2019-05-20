import React, {Component} from 'react';
import {connect} from 'react-redux';

import ContactsList from '../../components/ContactsList';
import ContactDetails from '../../components/ContactDetails';
import ContactDetailsForm from '../../components/ContactDetailsForm';
import {loadContacts, loadSelectedContact, editDetails, endEditDetails} from '../../actions/actions';


import './MainPage.css';


class MainPageView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createNewContact: false
        };
    }


    componentDidMount() {
        const {loadContacts} = this.props;
        loadContacts()
    }

    getSelectedContact = (id) => {
        const {loadSelectedContact} = this.props;

        loadSelectedContact(id);
    };

    showCreateNewContact = () => {
        this.setState({createNewContact: true});
    };

    hideCreateNewContact = () => {
        this.setState({createNewContact: false});
    };

    handleEditDetails = () => {
        const {editDetails} = this.props;

        this.setState({createNewContact: false}, editDetails);
    };

    renderCreateForm = () => {
        const {createNewContact} = this.state;

        if (createNewContact) {
            const {endEditDetails} = this.props;

            endEditDetails();
            return <ContactDetailsForm
                onSubmit={() => console.log("created new Contact!")}
                onCancel={ this.hideCreateNewContact}/>
        }
    };

    renderDetails() {
        const {selectedContact, endEditDetails, isEditingDetails} = this.props;

        if (selectedContact) {
            if (isEditingDetails) {
                return <ContactDetailsForm
                    initialValues={selectedContact}
                    onSubmit={() => console.log({selectedContact})}
                    onCancel={endEditDetails}/>;
            } else {
                return (<div>
                    <ContactDetails contact={selectedContact}/>
                    <div className="button-wrapper">
                        <button onClick={this.handleEditDetails}>Edit</button>
                        <button onClick={null}>Delete</button>
                    </div>
                </div>);
            }
        } else {
            return null;
        }
    }

    render() {
        const {contacts} = this.props;


        return (<>
                <div className="calls-history-wrapper">
                    <button className="calls-history-button">History of Calls</button>
                </div>
                <div className="main-page-container">

                    <div className="main-page-container__contact-list">
                        <ContactsList contacts={contacts} onContactSelected={this.getSelectedContact}/>
                        <div className="button-wrapper">
                            <button onClick={this.showCreateNewContact}>Create New Contact</button>
                        </div>
                    </div>
                    <div className="create-new-contact-wrapper">
                        {this.renderCreateForm()}
                    </div>
                    <div className="main-page-container__contact-detail">
                        {this.renderDetails()}
                    </div>
                </div>
            </>
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
