import { useState } from "react";
import FormWrapper from "./components/FormWrapper";
import InputField from "./components/InputField";

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

      <InputField errorMessage={errorMessage} />
      
      <button className="wide" type="submit" value="submit">
        Submit
      </button>
    </FormWrapper>
  );
}
export default ContactForm;
