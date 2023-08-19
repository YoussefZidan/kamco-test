import React from "react";
import ErrorMessage from "./ErrorMessage";

interface Option {
  code: string;
  label: string;
}

interface AppFormSelectProps {
  label: string;
  placeholder: string;
  name: string;
  options: Option[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur: React.FocusEventHandler<HTMLSelectElement>;
  invalid: boolean;
  errorMessage: string;
}

const AppFormSelect: React.FC<AppFormSelectProps> = ({
  label,
  placeholder,
  name,
  options,
  value,
  onChange,
  onBlur,
  invalid,
  errorMessage,
}) => {
  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <select
        name={name}
        placeholder={placeholder}
        className="app-input bg-white"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>

      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </label>
  );
};

export default AppFormSelect;
