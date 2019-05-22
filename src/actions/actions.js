import {getContactList, getContact, createContact, updateContact, deleteContact} from '../services/contacts';

import {SET_CONTACTS_LIST, SET_SELECTED_CONTACT, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT} from'../constants';

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

export function completeCreateContact(contact) {
    return {
        type: CREATE_CONTACT,
        contact
    }
}

export function completeUpdateContact(contact) {
    return {
        type: UPDATE_CONTACT,
        contact
    }
}

export function completeDeleteContact(id) {
    return {
        type: DELETE_CONTACT,
        id
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
        return getContact(id)
            .then(response => dispatch(setSelectedContact(response)));
    }
}

export function startCreateContact(contact) {
    return function (dispatch) {
        return createContact(contact)
            .then(response => dispatch(completeCreateContact(response)))
    }
}

export function startUpdateContact(contact) {
    return function (dispatch) {
        return updateContact(contact)
            .then(response => dispatch(completeUpdateContact(response)))
    }
}

export function startDeleteContact(id) {
    return function (dispatch) {
        return deleteContact(id)
            .then(response => dispatch(completeDeleteContact(id)))
    }
}


