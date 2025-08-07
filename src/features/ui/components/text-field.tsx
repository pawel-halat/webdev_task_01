import React from "react";

type TextFieldProps = {
  name: string;
  label?: string;
  required?: boolean;
  value?: string;
  errorMessage?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  onChange: (value: string) => void;
};

export const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  value,
  errorMessage: error,
  placeholder,
  required = false,
  type = "text",
  disabled = false,
  className = "",
  onChange,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="font-medium text-sm text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`${placeholder ?? ""}${required ? " *" : ""}`}
        disabled={disabled}
        className={`border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        autoComplete="off"
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
