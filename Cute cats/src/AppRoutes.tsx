import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import VotePage from "./pages/VotePage";
import ResultsPage from "./pages/ResultsPage";


const AppRoutes: React.FC = () => {

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route
          path="/"
          element={<VotePage />}
        />
        <Route
          path="/vote"
          element={<VotePage  />}
        />
        <Route
          path="/results"
          element={<ResultsPage />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
