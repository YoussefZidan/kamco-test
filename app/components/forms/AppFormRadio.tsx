interface AppFormRadioProps {
  label: string;
  name: string;
  options: Array<{ label: string; value: string }>;
}
const AppFormRadio = ({ label, name, options }: AppFormRadioProps) => {
  return (
    <div>
      <span className="text-neutral-600 font-semibold mb-3 text-base block">
        {label}
      </span>
      <div className="flex gap-10">
        {options.map((ele, i) => (
          <label key={i}>
            <input type="radio" name={name} value={ele.value} />
            <span className="text-base ms-2">{ele.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AppFormRadio;
