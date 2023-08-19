import ErrorMessage from "./ErrorMessage";

interface Option {
  label: string;
  value: string;
}

interface AppFormRadioProps {
  label: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  invalid: boolean;
  errorMessage: string;
}

const AppFormRadio: React.FC<AppFormRadioProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  onBlur,
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
              type="radio"
              name={name}
              value={optionValue}
              onChange={onChange}
              onBlur={onBlur}
              checked={optionValue === value}
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
