import { useState, type FC } from "react";

interface Props {
  options: { value: string; label: string }[];
  values?: string[];
  placeholder?: string;
  label?: string;
  onChange?: (selectedValues: string[]) => void;
}

export const MultiSelect: FC<Props> = ({
  options,
  values = [],
  placeholder = "Select options",
  label,
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(values);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionToggle = (optionValue: string) => {
    let newSelectedValues: string[];

    if (selectedValues.includes(optionValue)) {
      newSelectedValues = selectedValues.filter((val) => val !== optionValue);
    } else {
      newSelectedValues = [...selectedValues, optionValue];
    }

    setSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);
  };

  const handleSelectAll = () => {
    const allValues = options.map((option) => option.value);
    setSelectedValues(allValues);
    onChange?.(allValues);
  };

  const handleClearAll = () => {
    setSelectedValues([]);
    onChange?.([]);
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;
    if (selectedValues.length === 1) {
      const option = options.find((opt) => opt.value === selectedValues[0]);
      return option?.label || selectedValues[0];
    }
    if (selectedValues.length === options.length) return "All selected";

    return `${selectedValues.length} selected`;
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-left flex items-center justify-between"
        >
          <span
            className={
              selectedValues.length === 0 ? "text-gray-500" : "text-gray-900"
            }
          >
            {getDisplayText()}
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            <div className="p-2 border-b border-gray-200 bg-gray-50">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                >
                  Select All
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                  Clear All
                </button>
              </div>
            </div>

            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionToggle(option.value)}
                className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option.value)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-900">{option.label}</span>
              </div>
            ))}
          </div>
        )}

        {isOpen && (
          <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />
        )}
      </div>
    </div>
  );
};
