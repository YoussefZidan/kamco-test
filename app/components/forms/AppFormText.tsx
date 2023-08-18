interface AppFormTextProps {
  label: string;
  placeholder: string;
}
const AppFormText = ({ label, placeholder }: AppFormTextProps) => {
  return (
    <label className="block">
      <span className="text-neutral-600 font-semibold mb-2 text-base block">
        {label}
      </span>
      <input className="app-input" type="text" placeholder={placeholder} />
    </label>
  );
};

export default AppFormText;
