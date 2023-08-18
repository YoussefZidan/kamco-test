interface AppFormSelectProps {
  label: string;
  placeholder: string;
  options: Array<any>;
  invalid: boolean;
  errorMessage: string;
}
const AppFormSelect = ({
  label,
  placeholder,
  options,
  ...rest
}: AppFormSelectProps) => {
  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <select
        {...rest}
        placeholder={placeholder}
        className="app-input bg-white"
        defaultValue={""}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((ele: any, i: number) => (
          <option key={ele.code} value={i}>
            {i}
          </option>
        ))}
      </select>
    </label>
  );
};

export default AppFormSelect;
