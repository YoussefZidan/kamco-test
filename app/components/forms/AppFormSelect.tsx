interface AppFormSelectProps {
  label: string;
  placeholder: string;
  options: Array<any>;
}
const AppFormSelect = ({ label, placeholder, options }: AppFormSelectProps) => {
  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <select
        placeholder={placeholder}
        className="app-input bg-white"
        defaultValue={""}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((ele: any, i: number) => (
          <option key={ele.code} value={ele.dial_code}>
            {i}
          </option>
        ))}
      </select>
    </label>
  );
};

export default AppFormSelect;
