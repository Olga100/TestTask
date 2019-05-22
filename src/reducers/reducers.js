import {SET_CONTACTS_LIST, SET_SELECTED_CONTACT, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT} from'../constants';

const initialState = {
    contacts: [],
    selectedContact: null
};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CONTACTS_LIST:
            return {...state, contacts: action.contacts};
        case SET_SELECTED_CONTACT:
            return {...state, selectedContact: action.selectedContact};
        case CREATE_CONTACT:
            return {...state, contacts: [...state.contacts, action.contact], selectedContact: action.contact};
        case UPDATE_CONTACT:
            return {...state, contacts: state.contacts.map(c => c.id === action.contact.id ? action.contact : c), selectedContact: action.contact};
        case DELETE_CONTACT:
            const updatedContacts = state.contacts.filter(c => c.id !== action.id);
            return {...state, contacts: updatedContacts, selectedContact: updatedContacts.length > 0 ? updatedContacts[0] : null};
        default:
            return state;
    }
}
