import type { FC } from "react";

import AppRouter from "./features/routes/app-router";
import { PageHeader } from "./features/layout/page-header";

const App: FC = () => {
  return (
    <div className="App">
      <div className="min-h-screen bg-background-secondary">
        <PageHeader />
        <main className="pt-4">
          <AppRouter />
        </main>
      </div>
    </div>
  );
};

export default App;
