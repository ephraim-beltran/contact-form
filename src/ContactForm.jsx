import { useState } from "react";
import InputField from "./components/InputField";
import FormWrapper from "./components/FormWrapper";
import "./ContactForm.css";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState({});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Handle form data here
    console.dir(formData);
  };

  return (
    <FormWrapper handleSubmit={handleSubmit} setErrorMessage={setErrorMessage}>

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
    </FormWrapper>
  );
}
export default ContactForm;
