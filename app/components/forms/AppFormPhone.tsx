import { countries } from "constants-js";
import React from "react";
import ErrorMessage from "./ErrorMessage";

interface Country {
  code: string;
  dial_code: string;
  flag: string;
}

interface AppFormPhoneProps {
  label: string;
  placeholder: string;
  inputName: string;
  selectName: string;
  inputValue: string;
  selectValue: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
  onInputBlur: React.FocusEventHandler<HTMLInputElement>;
  onSelectBlur: React.FocusEventHandler<HTMLSelectElement>;
  invalid: boolean;
  errorMessage: string;
}

const AppFormPhone: React.FC<AppFormPhoneProps> = ({
  label,
  placeholder,
  inputName,
  selectName,
  inputValue,
  selectValue,
  onInputChange,
  onSelectChange,
  onInputBlur,
  onSelectBlur,
  invalid,
  errorMessage,
}) => {
  /**
   * Prevents non-numerical input in a form input field
   * @param {Event} e - The input event
   * @returns {void}
   */
  const preventNonNumericalInput: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const inputValue = e.target.value;
    const numericInput = inputValue.replace(/[^0-9]/g, "");

    if (inputValue !== numericInput) {
      e.target.value = numericInput;
    }
  };

  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <div className="flex items-start">
        <select
          onChange={onSelectChange}
          onBlur={onSelectBlur}
          className="app-input flex-[1] bg-white border-r-0 rounded-r-none focus:ring-0 focus:border-neutral-400"
          value={selectValue}
          name={selectName}
        >
          {countries.map((country: Country) => (
            <option key={country.code} value={country.dial_code}>
              {`${country.dial_code}   ${country.flag}`}
            </option>
          ))}
        </select>

        <div className="flex-[4]">
          <input
            name={inputName}
            type="text"
            className="app-input border-l-0 rounded-l-none focus:ring-0 focus:border-neutral-400 pl-0"
            onInput={preventNonNumericalInput}
            placeholder={placeholder}
            value={inputValue}
            onBlur={onInputBlur}
            onChange={onInputChange}
          />
        </div>
      </div>

      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </label>
  );
};

export default AppFormPhone;
