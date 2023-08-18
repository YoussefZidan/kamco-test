import { countries } from "constants-js";

import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface Country {
  code: string;
  dial_code: string;
  flag: string;
}

interface AppFormPhoneProps {
  label: string;
  placeholder: string;
  value: string;
  mobileCodeValue: string;
  name: string;
  defaultCodeValue?: string;
  onChange: (value: string) => void;
  onBlur: (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  invalid: boolean;
  errorMessage: string;
}

const AppFormPhone: React.FC<AppFormPhoneProps> = ({
  label,
  placeholder,
  value,
  mobileCodeValue,
  onChange,
  onBlur,
  invalid,
  errorMessage,
  name,
}) => {
  const [mobileCode, setMobileCode] = useState(mobileCodeValue);
  const [mobileNumber, setMobileNumber] = useState("");

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

  useEffect(() => {
    onChange(mobileCode + mobileNumber);
  }, [mobileCode, mobileNumber]);

  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <div className="flex items-start">
        <select
          onChange={(e) => {
            setMobileCode(e.target.value);
          }}
          onBlur={onBlur}
          className="app-input flex-[1] bg-white border-r-0 rounded-r-none focus:ring-0"
          value={mobileCode}
        >
          {countries.map((country: Country) => (
            <option key={country.code} value={country.dial_code}>
              {`${country.dial_code}   ${country.flag}`}
            </option>
          ))}
        </select>

        <div className="flex-[4]">
          <input
            name={name}
            type="text"
            className="app-input border-l-0 rounded-l-none focus:ring-0 pl-0"
            onInput={preventNonNumericalInput}
            placeholder={placeholder}
            value={value.replace(mobileCode, "")}
            onBlur={onBlur}
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
          />
        </div>
      </div>

      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </label>
  );
};

export default AppFormPhone;
