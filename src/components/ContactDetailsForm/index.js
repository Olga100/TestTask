import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import './ContactDetailsForm.css'

class ContactDetailsForm extends Component {
    render () {
        const {onSubmit, onCancel} = this.props;
        return (
            <form className="contact-form" onSubmit={onSubmit}>
                <h2> Contact Form: </h2>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name"
                />
                <Field
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                />
                <Field
                    name="phone"
                    component="input"
                    type="phone"
                    placeholder="phone"
                />
                <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="email"
                />
                <button type="submit" label="submit">Submit</button>
                <button onClick={onCancel}>Cancel</button>
            </form>
        );
    }
}

ContactDetailsForm = reduxForm ({
    form: 'contactDetailsForm',
}) (ContactDetailsForm);

export default ContactDetailsForm;
