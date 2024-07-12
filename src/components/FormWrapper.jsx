import PropTypes from "prop-types";
import styled from "./FormWrapper.module.css";

function FormWrapper(props) {
  const setMessage = (inputName, message) => {
    props.setErrorMessage((currentMessages) => ({
      ...currentMessages,
      [inputName]: message,
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
  return (
    <form
      id="contact-form"
      onSubmit={props.handleSubmit}
      onInvalidCapture={handleInvalid}
      onChangeCapture={handleChange}
      className={styled.form}
    >
      {props.children}
    </form>
  );
}

FormWrapper.propTypes = {
  handleSubmit: PropTypes.func,
  children: PropTypes.node,
  setErrorMessage: PropTypes.func,
};
export default FormWrapper;
