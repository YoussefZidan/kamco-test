import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface Option {
  code: string;
  label: string;
}

interface AppFormSelectProps {
  label: string;
  placeholder: string;
  options: Option[];
  invalid: boolean;
  errorMessage: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
  name: string;
}

const AppFormSelect: React.FC<AppFormSelectProps> = ({
  label,
  placeholder,
  options,
  invalid,
  errorMessage,
  onChange,
  onBlur,
  value,
  name,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event);
  };

  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <select
        name={name}
        placeholder={placeholder}
        className="app-input bg-white"
        value={selectedValue}
        onChange={handleSelectChange}
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
