import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import type { FC, ReactNode } from "react";

import { queryClient } from "../../config/query-client";
import { ErrorBoundary } from "../error";

interface Props {
  children: ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  </ErrorBoundary>
);
