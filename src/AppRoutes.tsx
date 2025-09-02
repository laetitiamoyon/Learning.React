import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import VotePage from "./pages/VotePage";
import ResultsPage from "./pages/ResultsPage";
import { resetCatsVoteFromLocalStorageIfNotDefined } from "./domains/cats/cats.localStorage";
import type { Cat } from "./domains/cats/cats.model";

interface AppRoutesProps {
  cats: Cat[];
  votesCount: number;
  handleVote: (id: string) => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ cats, votesCount, handleVote }) => {
  const catsWithVotes = resetCatsVoteFromLocalStorageIfNotDefined(cats);

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route
          path="/"
          element={<VotePage cats={catsWithVotes} onVote={handleVote} votesCount={votesCount} />}
        />
        <Route
          path="/vote"
          element={<VotePage cats={catsWithVotes} onVote={handleVote} votesCount={votesCount} />}
        />
        <Route
          path="/results"
          element={<ResultsPage cats={catsWithVotes} votesCount={votesCount} />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
