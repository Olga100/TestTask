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

export function createContact(contact) {
    const query = `
      mutation {
        createContact(firstName: "${contact.firstName}", lastName: "${contact.lastName}", phone: "${contact.phone}", email: "${contact.email}") {
          id
          firstName
          lastName
          phone
          email
        }
      }`;

    return axios.post(serverUrl, { query })
        .then(result => result.data.data.createContact);
}

export function updateContact(contact) {
    const query = `
      mutation {
        updateContact(id: "${contact.id}", firstName: "${contact.firstName}", lastName: "${contact.lastName}", phone: "${contact.phone}", email: "${contact.email}") {
          id
          firstName
          lastName
          phone
          email      
        }
      }`;

    return axios.post(serverUrl, { query })
        .then(result => result.data.data.updateContact);
}

export function deleteContact(id) {
    const query = `
      mutation {
        removeContact(id: "${id}")
      }`;

    return axios.post(serverUrl, { query });
}