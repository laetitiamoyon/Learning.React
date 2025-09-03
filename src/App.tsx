import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  return (
    <AppRoutes />
  );
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <AppContent />
    </Router>
  </QueryClientProvider>
);

export default App;
