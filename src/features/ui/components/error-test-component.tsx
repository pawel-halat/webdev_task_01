import { useState, type FC } from "react";

export const ErrorTestComponent: FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("This is a test error thrown by ErrorTestComponent");
  }

  return (
    <div className="p-4 border border-red-300 rounded-lg bg-red-50">
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        Error Boundary Test Component
      </h3>
      <p className="text-red-700 mb-4">
        Click the button below to trigger an error and test the error boundary:
      </p>
      <button
        onClick={() => setShouldThrow(true)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Throw Error
      </button>
    </div>
  );
};

export default ErrorTestComponent;
