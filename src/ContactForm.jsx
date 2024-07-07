import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
    const [inputInvalid, setInputInvalid] = useState({});
    const validate = ([name, value]) => {
        if(value.length == 0) {
            setInputInvalid(current => ({...current, [name]: true}));
            console.warn(`Input ${name} is empty.`);
            return;
        }
        setInputInvalid(current => ({...current, [name]: false, queryType: false, consent: false}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formElement = event.target.elements;
        // Handle Form Data here
        for (const entry of formData.entries()) {
            validate(entry);
        }
        console.log(formElement);
    }
    const errorMessage = (type) => {
        let message;
        switch (type) {
            case 'text':
                message = <span className="error-message">This field is required</span>;
                break;
            case 'email':
                message = <span className="error-message">Please enter a valid email address</span>;
                break;
            case 'consent':
                message = <span className="error-message block">To submit this form, please consent to being contacted</span>;
                break;
            case 'query':
                message = <span className="error-message">Please select a query type</span>;
                break;
            default:
                break;
        }
        return message;
    }
    return (
    <form id="contact-form" onSubmit={handleSubmit}>
        <h2 className="wide">Contact Us</h2>
        <label className={(inputInvalid.firstName?"invalid-input ":"") + "split block"}>
            <span className="required-input">First Name</span>
            <input type="text" name="firstName" />
            {inputInvalid.firstName && errorMessage('text')}
        </label>
        <label className={(inputInvalid.lastName?"invalid-input ":"") + "split block"}>
            <span className="required-input">Last Name</span>
            <input type="text" name="lastName" />
            {inputInvalid.lastName && errorMessage('text')}
        </label>
        <label className={(inputInvalid.email?"invalid-input ":"") + "wide block"}>
            <span className="required-input">Email Address</span>
            <input type="email" name="email" />
            {inputInvalid.email && errorMessage('email')}
        </label>
        <fieldset className={(inputInvalid.queryType?"invalid-input ":"") + "wide"}>
            <span className="required-input wide">Query Type</span>
            <label className="split">
                <input type="radio" name="queryType" value="general-enquiry" />
                <span>General Inquiry</span>
            </label>
            <label className="split">
                <input type="radio" name="queryType" value="support-request" />
                <span>Support Request</span>
            </label>
            {inputInvalid.queryType && errorMessage('query')}
        </fieldset>
        <label className={(inputInvalid.message?"invalid-input ":"") + "wide block"}>
            <span className="required-input">Message</span>
            <textarea name="message"></textarea>
            {inputInvalid.message && errorMessage('text')}
        </label>
        <label className={(inputInvalid.consent?"invalid-input ":"") + "wide"}>
            <input type="checkbox" name="consent" />
            <span className="required-input">I consent to being contacted by the team</span>
            {inputInvalid.consent && errorMessage('consent')}
        </label>
        <button className="wide" type="submit" value="submit">Submit</button>
    </form>
    )
}
export default ContactForm;