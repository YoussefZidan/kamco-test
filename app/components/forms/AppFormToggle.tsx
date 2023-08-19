import { useEffect, useState } from "react";

interface AppFormToggleProps {
  label: string;
  name: string;
  value: string;
  onChange: (isEnabled: boolean) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  enabledText: string;
  disabledText: string;
}

const AppFormToggle: React.FC<AppFormToggleProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  enabledText,
  disabledText,
}: AppFormToggleProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    onChange(isEnabled);
  }, [isEnabled]);

  const toggleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEnabled(e.target.checked);
  };

  return (
    <label>
      <span className="text-neutral-600 font-semibold mb-3 text-base block">
        {label}
      </span>
      <div className="flex items-center gap-3">
        <span className={!isEnabled ? "opacity-50" : "font-semibold"}>
          {enabledText}
        </span>

        <div className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name={name}
            className="sr-only peer"
            onChange={toggleSwitch}
            onBlur={onBlur}
            checked={isEnabled}
            value={value}
          />

          <div
            className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 -blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary`}
          ></div>
        </div>

        <span className={isEnabled ? "opacity-50" : "font-semibold"}>
          {disabledText}
        </span>
      </div>
    </label>
  );
};

export default AppFormToggle;
