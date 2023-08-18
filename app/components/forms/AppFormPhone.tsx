import { countries } from "constants-js";
import { preventNonNumericalInput } from "javascript-functions";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface AppFormPhoneProps {
  label: string;
  placeholder: string;
  defaultCodeValue?: string;
  onChange: Function;
  invalid: boolean;
  errorMessage: string;
}

const AppFormPhone = ({
  label,
  placeholder,
  defaultCodeValue = "+965",
  onChange,
  invalid,
  errorMessage,
}: AppFormPhoneProps) => {
  const [mobileCode, setMobileCode] = useState(defaultCodeValue);
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    onChange(mobileCode + mobileNumber);
  }, [onChange, mobileCode, mobileNumber]);

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
          className="app-input flex-[1] bg-white border-r-0 rounded-r-none focus:ring-0"
          defaultValue={defaultCodeValue}
        >
          {countries.map((ele: any) => (
            <option
              key={ele.code}
              value={ele.dial_code}
            >{`${ele.dial_code}   ${ele.flag}`}</option>
          ))}
        </select>

        <div className="flex-[4]">
          <input
            type="text"
            className="app-input border-l-0 rounded-l-none focus:ring-0 pl-0"
            onKeyPress={preventNonNumericalInput}
            placeholder={placeholder}
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
