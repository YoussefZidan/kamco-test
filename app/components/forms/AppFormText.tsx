import ErrorMessage from "./ErrorMessage";

interface AppFormTextProps {
  label: string;
  placeholder: string;
  invalid: boolean;
  errorMessage: string;
}
const AppFormText = ({
  label,
  placeholder,
  invalid,
  errorMessage,
  ...rest
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
        {...rest}
      />
      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </label>
  );
};

export default AppFormText;
