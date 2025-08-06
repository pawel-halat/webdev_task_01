import type { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-2">
          Page Not Found
        </h2>
        <p className="text-tertiary max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
      <button
        onClick={() => window.history.back()}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
