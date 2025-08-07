import type { FC, ChangeEvent } from "react";

interface NumberFieldProps {
  label?: string;
  value: string | "";
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  errorMessage?: string;
  onChange: (value: string) => void;
}

export const NumberField: FC<NumberFieldProps> = ({
  label,
  value,
  min,
  max,
  placeholder,
  className,
  errorMessage,
  disabled = false,
  step = 1,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    onChange(val);
  };

  return (
    <div className={`border-gray-300 ${className}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        disabled={disabled}
        className={`border border-gray-300 rounded px-3 py-1.5 w-full focus:outline-none focus:ring focus:border-blue-300${
          errorMessage ? " border-red-500" : ""
        }`}
      />
      {errorMessage && (
        <span className="text-red-500 text-xs mt-1 block">{errorMessage}</span>
      )}
    </div>
  );
};
