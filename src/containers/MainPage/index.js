import React, {Component} from 'react';
import {connect} from 'react-redux';

import ContactsList from '../../components/ContactsList';
import ContactDetails from '../../components/ContactDetails';
import ContactDetailsForm from '../../components/ContactDetailsForm';
import {loadContacts, loadSelectedContact, loadCallHistory, startCreateContact, startUpdateContact, startDeleteContact} from '../../actions/actions';

import './MainPage.css';

class MainPageView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isContactEditing: false,
            isContactCreating: false
        };
    }

    componentDidMount() {
        this.props.loadContacts();
    }

    handleCreateContact(contact) {
        this.props.startCreateContact(contact)
            .then(() => this.setState({isContactCreating: false}));
    }

    handleUpdateContact(contact) {
        this.props.startUpdateContact(contact)
            .then(() => this.setState({isContactEditing: false}));
    }

    receiveCallHistory = id => this.props.loadCallHistory(id)
        .then((response) => {
            const callHistoryArray = Object.assign({},response);
            console.log("x " + JSON.stringify(callHistoryArray.callHistory));
        } );

    renderDetails() {
        const {selectedContact, startCreateContact, startUpdateContact, startDeleteContact} = this.props;
        const {isContactEditing, isContactCreating} = this.state;

        let callHistoryInfo;
        console.log("R3 " + callHistoryInfo);

        if (isContactCreating) {
            return <ContactDetailsForm
                onSubmit={data => this.handleCreateContact(data)}
                onCancel={() => this.setState({isContactCreating: false})}/>
        }
        else if (selectedContact) {
            if (isContactEditing) {
                return <ContactDetailsForm
                    initialValues={selectedContact}
                    onSubmit={data => this.handleUpdateContact(data)}
                    onCancel={() => this.setState({isContactEditing: false})}/>;
            } else {
                return <ContactDetails contact={selectedContact}
                                       onEdit={() => this.setState({isContactEditing: true})}
                                       onDelete={startDeleteContact}
                                       showCallHistory={this.receiveCallHistory}
                                       callHistoryInfo={null}/>;
            }
        }
    }

    render() {
        const {contacts, loadSelectedContact} = this.props;

        return (<div>
                <div className="main-page-container">

                    <div className="main-page-container__contact-list">
                        <ContactsList contacts={contacts} onContactSelected={loadSelectedContact}/>
                        <div className="button-wrapper">
                            <button onClick={() => this.setState({isContactCreating: true})}>Create New Contact</button>
                        </div>
                    </div>
                    <div className="main-page-container__contact-detail">
                        {this.renderDetails()}
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    contacts: state.main.contacts,
    selectedContact: state.main.selectedContact,
    callHistoryArray: state.main.callHistory
});

const mapDispatchToProps = {
    loadContacts,
    loadSelectedContact,
    loadCallHistory,
    startCreateContact,
    startUpdateContact,
    startDeleteContact
};

const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageView);

export default MainPage;
