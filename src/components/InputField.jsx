import styled from "./InputField.module.css";
import PropTypes from "prop-types";
function RequiredMarker() {
  return <span style={{ marginLeft: 10, color: "hsl(169, 82%, 27%" }}>*</span>;
}
function InputField({ errorMessage }) {
  return (
    <>
      <label className={styled.entry}>
        <span className={styled.label}>
          First Name
          <RequiredMarker />
        </span>
        <input type="text" name="firstname" required={true} />
        <span className={styled.error}>{errorMessage.firstname}</span>
      </label>
      <label className={styled.entry}>
        <span className={styled.label}>
          Last Name
          <RequiredMarker />
        </span>
        <input type="text" name="lastname" required={true} />
        <span className={styled.error}>{errorMessage.lastname}</span>
      </label>
      <label className={`${styled.wide} ${styled.entry}`}>
        <span className={styled.label}>
          Email Address
          <RequiredMarker />
        </span>
        <input type="email" name="email" required={true} />
        <span className={styled.error}>{errorMessage.email}</span>
      </label>
      <fieldset className={`${styled.entry} ${styled.selection}`}>
        <span>
          Query Type
          <RequiredMarker />
        </span>
        <label>
          <input
            type="radio"
            name="queryType"
            value="general-inquiry"
            required
          />
          <span>General Enquiry</span>
        </label>
        <label>
          <input
            type="radio"
            name="queryType"
            value="support-request"
            required
          />
          <span>Support Request</span>
        </label>
        <span className={styled.error}>{errorMessage.queryType}</span>
      </fieldset>
      <label className={`${styled.wide} ${styled.entry}`}>
        <span>
          Message
          <RequiredMarker />
        </span>
        <textarea name="message" required></textarea>
        <span className={styled.error}>{errorMessage.message}</span>
      </label>
      <label className={`${styled.wide} ${styled.consent}`}>
        <input type="checkbox" name="consent" required />
        <span className={styled.checkbox}></span>
        <span>
          I consent to being contacted by the team
          <RequiredMarker />
        </span>
        <span className={styled.error}>{errorMessage.consent}</span>
      </label>
    </>
  );
}

InputField.propTypes = {
  errorMessage: PropTypes.object,
};
export default InputField;
