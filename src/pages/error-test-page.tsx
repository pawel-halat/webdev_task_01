import type { FC } from "react";

import { ErrorTestComponent } from "../features/ui/components/error-test-component";

const ErrorTestPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Error Boundary Test Page
        </h1>
        <p className="text-gray-600 mb-8">
          This page contains a test component that can throw errors to
          demonstrate the error boundary functionality. When you click the
          "Throw Error" button, the error boundary will catch the error and
          display a user-friendly error message.
        </p>
        <ErrorTestComponent />
      </div>
    </div>
  );
};

export default ErrorTestPage;
