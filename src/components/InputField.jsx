import PropTypes from "prop-types";

function RequiredMarker() {
  return <span style={{ marginLeft: 5 }}>*</span>;
}
function RadioButton({ text, value, name }) {
  return (
    <label style={{flexBasis: '50%'}}>
      <input type="radio" name={name} value={value} required={true} />
      <span>{text}</span>
    </label>
  );
}
export default function InputField({
  inputType,
  inputStyle,
  label,
  name,
  message,
  options,
}) {
  let inputField;

  switch (inputType) {
    case "name":
      inputField = (
        <label className={inputStyle}>
          <span>
            {label}
            <RequiredMarker />
          </span>
          <input type="text" name={name} required={true} />
          {message[name]}
        </label>
      );
      break;

    case "email":
      inputField = (
        <label className={inputStyle}>
          <span>
            {label}
            <RequiredMarker />
          </span>
          <input type="email" name={name} required={true} />
          {message[name]}
        </label>
      );
      break;

    case "selectionExclusive":
      inputField = (
        <fieldset style={{flexBasis: '100%'}}>
          <span className="wide">
            {label} <RequiredMarker />
          </span>
          {options.map((option) => {
            return (
              <RadioButton
                key={option.value}
                text={option.text}
                value={option.value}
                name={name}
              />
            );
          })}
          {message[name]}
        </fieldset>
      );
      break;

    case "textbox":
      inputField = (
        <label className={inputStyle}>
          <span>{label}<RequiredMarker /></span>
          <textarea name={name} required={true}></textarea>
          {message[name]}
        </label>
      );
      break;

    case "acknowledgement":
      inputField = (
        <label className={inputStyle}>
        <input type="checkbox" name={name} required={true} />
        <span>
          {label} <RequiredMarker />
        </span>
        {message[name]}
      </label>
      )
      break;

    default:
      break;
  }
  return inputField;
}
RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
InputField.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputStyle: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.object,
  options: PropTypes.array,
}