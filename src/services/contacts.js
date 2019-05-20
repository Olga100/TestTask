import axios from 'axios';

const serverUrl = 'http://localhost:3001';

const GET_CONTACT_LIST = `
  {
    allContacts {
      id
      firstName
      lastName
    }
  }
`;

const GET_SELECTED_CONTACT = id => `
  {
    Contact(id: ${id})  {
      id
      firstName
      lastName
      phone
      email
    }
  }`;

export function getContactList() {
    return axios.post(serverUrl, { query: GET_CONTACT_LIST })
        .then(result => result.data.data.allContacts);
}

export function getSelectedContact(id) {
    return axios.post(serverUrl, { query: GET_SELECTED_CONTACT(id) })
        .then(result => result.data.data.Contact);
}
