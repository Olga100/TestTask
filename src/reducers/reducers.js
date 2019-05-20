import {SET_CONTACTS_LIST, SET_SELECTED_CONTACT, EDIT_DETAILS, END_EDIT_DETAILS} from'../constants';

const initialState = {
    contacts: [],
    selectedContact: null,
    isEditingDetails: false,
};

export default function mainReducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case SET_CONTACTS_LIST:
            return {...state, contacts: action.contacts};
        case SET_SELECTED_CONTACT:
            return {...state, selectedContact: action.selectedContact};
        case EDIT_DETAILS:
            return {...state, isEditingDetails: true};
        case END_EDIT_DETAILS:
            return {...state, isEditingDetails: false};
        default:
            return state;
    }
}

