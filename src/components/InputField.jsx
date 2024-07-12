import styled from "./InputField.module.css";
import PropTypes from 'prop-types';
function RequiredMarker() {
    return <span style={{marginLeft: 10, color:"hsl(169, 82%, 27%"}}>*</span>
}
function InputField({ errorMessage }) {
    
    return (
    <>
    <label className={styled.entry}>
        <span className={styled.label}>First Name<RequiredMarker/></span>
        <input type="text" name="firstname" required={true} />
        {errorMessage.firstname}
    </label>
    <label className={styled.entry}>
        <span className={styled.label}>Last Name<RequiredMarker/></span>
        <input type="text" name="lastname" required={true} />
        {errorMessage.lastname}
    </label>
    <label className={`${styled.wide} ${styled.entry}`}>
        <span className={styled.label}>Email Address<RequiredMarker/></span>
        <input type="email" name="email" required={true} />
        {errorMessage.email}
    </label>
    <fieldset className={styled.entry}>
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
    <label className={`${styled.wide} ${styled.entry}`}>
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