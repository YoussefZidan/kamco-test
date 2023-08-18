import { countries } from "constants-js";
import { preventNonNumericalInput } from "javascript-functions";

interface AppFormPhoneProps {
  label: string;
  placeholder: string;
}

const AppFormPhone = ({ label, placeholder }: AppFormPhoneProps) => {
  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <div className="flex items-start">
        <select
          className="app-input flex-[1] bg-white border-r-0 rounded-r-none focus:ring-0"
          defaultValue={"+965"}
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
          />
        </div>
      </div>
    </label>
  );
};

export default AppFormPhone;
