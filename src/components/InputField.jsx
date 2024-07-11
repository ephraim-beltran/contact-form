import styled from "./InputField.module.css";
import PropTypes from 'prop-types';
function RequiredMarker() {
    return <span className={styled.label}>*</span>
}
function InputField({ errorMessage }) {
    
    return (
    <>
    <label>
        <span className={styled.label}>First Name<RequiredMarker/></span>
        <input type="text" name="firstname" required={true} />
        {errorMessage.firstname}
    </label>
    <label>
        <span className={styled.label}>Last Name<RequiredMarker/></span>
        <input type="text" name="lastname" required={true} />
        {errorMessage.lastname}
    </label>
    <label>
        <span className={styled.label}>Email Address<RequiredMarker/></span>
        <input type="email" name="email" required={true} />
        {errorMessage.email}
    </label>
    <fieldset>
        <span>Query Type<RequiredMarker/></span>
        <label>
            <input type="radio" name="queryType" value="general-inquiry" required />
            <span>General Inquiry</span>
        </label>
        <label>
            <input type="radio" name="queryType" value="support-request" required />
            <span>Support Request</span>
        </label>
        {errorMessage.queryType}
    </fieldset>
    <label>
        <span>Message<RequiredMarker /></span>
        <textarea name="message" required></textarea>
        {errorMessage.message}
    </label>
    </>
    )
}

InputField.propTypes = {
    errorMessage: PropTypes.object,
}
export default InputField;