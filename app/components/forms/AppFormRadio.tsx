import ErrorMessage from "./ErrorMessage";

interface Option {
  label: string;
  value: string;
}

interface AppFormRadioProps {
  label: string;
  name: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  invalid: boolean;
  errorMessage: string;
}

const AppFormRadio: React.FC<AppFormRadioProps> = ({
  label,
  name,
  options,
  onChange,
  onBlur,
  value,
  invalid,
  errorMessage,
}) => {
  return (
    <div>
      <span className="text-neutral-600 font-semibold mb-3 text-base block">
        {label}
      </span>
      <div className="flex gap-10">
        {options.map(({ label: optionLabel, value: optionValue }, index) => (
          <label key={index}>
            <input
              onBlur={onBlur}
              type="radio"
              name={name}
              value={optionValue}
              onChange={onChange}
              defaultChecked={optionValue === value}
            />
            <span className="text-base ms-2">{optionLabel}</span>
          </label>
        ))}
      </div>
      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default AppFormRadio;
