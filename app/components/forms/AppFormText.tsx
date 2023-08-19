import ErrorMessage from "./ErrorMessage";

interface AppFormTextProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  invalid: boolean;
  errorMessage: string;
}

const AppFormText = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  invalid,
  errorMessage,
}: AppFormTextProps) => {
  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <input
        className="app-input"
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </label>
  );
};

export default AppFormText;
