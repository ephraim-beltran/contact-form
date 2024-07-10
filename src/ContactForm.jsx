import { useState } from "react";
import InputField from "./components/InputField";
import "./ContactForm.css";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState({});
  const setMessage = (inputName, message) => {
    setErrorMessage((currentMessages) => ({
      ...currentMessages,
      [inputName]: <span>{message}</span>,
    }));
  };
  const validate = (target) => {
    const { validity, name } = target;
    let inputType = "input";
    let emptyInputMessage = "This field is required";

    if (target.type == "email") inputType = "email address";
    if (target.name == "consent")
      emptyInputMessage =
        "To submit this form, please consent to being contacted";
    if (target.name == "queryType")
      emptyInputMessage = "Please select a query type";

    if (validity.valid) return setMessage(name, null);

    if (validity.badInput) return setMessage(name, "Invalid input");
    if (validity.patternMismatch) return setMessage(name, "Invalid input");
    if (validity.rangeOverflow)
      return setMessage(name, "Input is higher than accepted value");
    if (validity.rangeUnderflow)
      return setMessage(name, "Input is lower than accepted value");
    if (validity.stepMismatch) return setMessage(name, "Invalid value");
    if (validity.tooLong) return setMessage(name, "Input is too long");
    if (validity.tooShort) return setMessage(name, "Input is too short");
    if (validity.typeMismatch)
      return setMessage(name, `Please entert a valid ${inputType}`);
    if (validity.valueMissing) return setMessage(name, emptyInputMessage);
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    const target = event.target;
    console.warn(`Invalid ${target.name} input`);
    validate(target);
  };
  const handleChange = ({ target }) => {
    validate(target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Handle form data here
    console.dir(formData);
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      onInvalidCapture={handleInvalid}
      onChangeCapture={handleChange}
    >
      <h2 className="wide">Contact Us</h2>
      <InputField
        inputType="name"
        inputStyle="split block"
        label="First Name"
        name="firstName"
        message={errorMessage}
      />
      <InputField
        inputType="name"
        inputStyle={"split block"}
        label="Last Name"
        name="lastName"
        message={errorMessage}
      />
      <InputField
        inputType="email"
        inputStyle="wide block"
        label="Email Address"
        name="email"
        message={errorMessage}
      />
      <InputField
        inputType="selectionExclusive"
        inputStyle="wide block"
        label="Query Type"
        name="queryType"
        options={[
            {text: "General Inquiry", value: "general-inquiry"},
            {text: "Support Request", value: "support-request"},
        ]}
        message={errorMessage}
      />
      <InputField
        inputType="textbox"
        inputStyle="wide block"
        label="Message"
        name="message"
        message={errorMessage}
      />
      <InputField
        inputType="acknowledgement"
        inputStyle="wide"
        label="I consent to being contacted by the team"
        name="consent"
        message={errorMessage}
      />
      <button className="wide" type="submit" value="submit">
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
