import { useState } from "react";
import styles from "./ContactForm.module.css";
import "./ContactForm.css";

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState({});
    const setMessage = (inputName, message) => {
        setErrorMessage(currentMessages => ({
            ...currentMessages,
            [inputName]: <span>{message}</span>
        }))
    }
    const validate = (target) => {
        const {validity, name} = target;
        let inputType = 'input'
        let emptyInputMessage = 'This field is required';

        if(target.type == 'email') inputType = 'email address';
        if(target.name == 'consent') emptyInputMessage = 'To submit this form, please consent to being contacted';
        if(target.name == 'queryType') emptyInputMessage = 'Please select a query type';

        if(validity.valid)              return setMessage(name, null);

        if(validity.badInput)           return setMessage(name, "Invalid input");
        if(validity.patternMismatch)    return setMessage(name, "Invalid input");
        if(validity.rangeOverflow)      return setMessage(name, "Input is higher than accepted value");
        if(validity.rangeUnderflow)     return setMessage(name, "Input is lower than accepted value");
        if(validity.stepMismatch)       return setMessage(name, "Invalid value");
        if(validity.tooLong)            return setMessage(name, "Input is too long");
        if(validity.tooShort)           return setMessage(name, "Input is too short");
        if(validity.typeMismatch)       return setMessage(name, `Please entert a valid ${inputType}`);
        if(validity.valueMissing)       return setMessage(name, emptyInputMessage);
    }
    const handleInvalid = (event) => {
        event.preventDefault();
        const target = event.target;
        console.warn(`Invalid ${target.name} input`);
        validate(target);
    }
    const handleChange = ({target}) => {
        validate(target);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        // Handle form data here
        console.dir(formData);
    }

    return (
    <form id="contact-form" onSubmit={handleSubmit} onInvalidCapture={handleInvalid} onChangeCapture={handleChange}>
        <h2 className="wide">Contact Us</h2>
        <label className={"split block"}>
            <span className="required-input">First Name</span>
            <input type="text" name="firstName" required={true} />
            {errorMessage.firstName}
        </label>
        <label className={"split block"}>
            <span className="required-input">Last Name</span>
            <input type="text" name="lastName" required={true} />
            {errorMessage.lastName}
        </label>
        <label className={"wide block"}>
            <span className="required-input">Email Address</span>
            <input type="email" name="email" required={true} />
            {errorMessage.email}
        </label>
        <fieldset className={"wide"}>
            <span className="required-input wide">Query Type</span>
            <label className="split">
                <input type="radio" name="queryType" value="general-enquiry" required={true} />
                <span>General Inquiry</span>
            </label>
            <label className="split">
                <input type="radio" name="queryType" value="support-request" />
                <span>Support Request</span>
            </label>
            {errorMessage.queryType}
        </fieldset>
        <label className={"wide block"}>
            <span className="required-input">Message</span>
            <textarea name="message" required={true}></textarea>
            {errorMessage.message}
        </label>
        <label className={"wide"}>
            <input type="checkbox" name="consent" required={true} />
            <span className="required-input">I consent to being contacted by the team</span>
            {errorMessage.consent}
        </label>
        <button className="wide" type="submit" value="submit">Submit</button>
    </form>
    )
}
export default ContactForm;