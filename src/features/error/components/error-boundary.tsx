import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import type { FC, ReactNode, ErrorInfo } from "react";

import { ErrorFallback } from "./error-fallback";

interface Props {
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export const ErrorBoundary: FC<Props> = ({ children, onError }) => {
  const handleError = (error: Error, errorInfo: ErrorInfo) => {
    onError?.(error, errorInfo);
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};
