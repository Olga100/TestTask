import axios from 'axios';

const serverUrl = 'http://localhost:3001';

export function getContactList() {
    const query = `
      {
        allContacts {
          id
          firstName
          lastName
        }
      }`;

    return axios.post(serverUrl, { query })
        .then(result => result.data.data.allContacts);
}

export function getContact(id) {
    const query = `
      {
        Contact(id: ${id})  {
          id
          firstName
          lastName
          phone
          email
        }    
      }`;

    return axios.post(serverUrl, { query })
        .then(result => result.data.data.Contact);
}

export function getCallHistory(id) {
    const query = `
      {
        Contact(id: ${id})  {
          callHistory
        }    
      }`;

    return axios.post(serverUrl, { query })
        .then(result => result.data.data.Contact.callHistory);
}

export function createContact(contact) {
    const query = `
      mutation CreateContact($firstName: String!, $lastName: String!, $phone: String!, $email: String!) {
        createContact(firstName: $firstName, lastName: $lastName, phone: $phone, email: $email, callHistory: []) {
          id
          firstName
          lastName
          phone
          email
        }
      }`;

    return axios.post(serverUrl, { query, variables: contact })
        .then(result => result.data.data.createContact);
}

export function updateContact(contact) {
    const query = `
      mutation UpdateContact($id: ID!, $firstName: String!, $lastName: String!, $phone: String!, $email: String!) {
        updateContact(id: $id, firstName: $firstName, lastName: $lastName, phone: $phone, email: $email) {
          id
          firstName
          lastName
          phone
          email
        }
      }`;

    return axios.post(serverUrl, { query, variables: contact })
        .then(result => result.data.data.updateContact);
}

export function deleteContact(id) {
    const query = `
      mutation {
        removeContact(id: "${id}")
      }`;

    return axios.post(serverUrl, { query });
}