import {getContactList, getSelectedContact} from '../services/contacts';

import {SET_CONTACTS_LIST, SET_SELECTED_CONTACT, EDIT_DETAILS, END_EDIT_DETAILS} from'../constants';

export function setContactsList(contacts) {
    return {
        type: SET_CONTACTS_LIST,
        contacts
    }
}

export function setSelectedContact(selectedContact) {
    return {
        type: SET_SELECTED_CONTACT,
        selectedContact
    }
}

export function editDetails() {
    return {
        type: EDIT_DETAILS
    }
}

export function endEditDetails() {
    return {
        type: END_EDIT_DETAILS
    }
}

export function loadContacts() {
    return function (dispatch) {
        return getContactList()
            .then(response => dispatch(setContactsList(response)));
    }
}

export function loadSelectedContact(id) {
    return function (dispatch) {
        return getSelectedContact(id)
            .then(response => dispatch(setSelectedContact(response)));
    }
}
