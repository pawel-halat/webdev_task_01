import type { FC } from "react";
import { useState } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export const Select: FC<SelectProps> = ({
  options,
  value,
  label,
  placeholder = "Select...",
  errorMessage,
  className = "",
  disabled = false,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative flex flex-col gap-1 w-1/2 ${className}`}>
      {label && (
        <label className="font-medium text-sm text-gray-700">{label}</label>
      )}
      <div
        className={`border rounded px-3 py-2 text-sm bg-white cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          errorMessage ? "border-red-500" : "border-gray-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => !disabled && setOpen((o) => !o)}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <span className="ml-2">▼</span>
      </div>
      {open && !disabled && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow z-10">
          {options.length === 0 && (
            <div className="px-3 py-2 text-gray-400">No options</div>
          )}
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${
                opt.value === value ? "bg-blue-50 font-semibold" : ""
              }`}
              onClick={() => {
                setOpen(false);
                onChange?.(opt.value);
              }}
              role="option"
              aria-selected={opt.value === value}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
      {errorMessage && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
