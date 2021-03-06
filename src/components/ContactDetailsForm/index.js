import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import './ContactDetailsForm.css'

class ContactDetailsForm extends Component {
    render () {
        const {onCancel, handleSubmit, onSubmit} = this.props;
        return (
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
                <div className="form-button-wrapper">
                <button type="submit" label="submit">Submit</button>
                <button onClick={onCancel}>Cancel</button>
                </div>
            </form>
        );
    }
}

ContactDetailsForm = reduxForm ({
    form: 'contactDetailsForm',
}) (ContactDetailsForm);

export default ContactDetailsForm;
