import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getCatsFromLocalStorage, resetCatsVoteFromLocalStorageIfNotDefined } from "./domains/cats/cats.localStorage";
import AppRoutes from "./AppRoutes";
import { getLocalStorage, setLocalStorage } from "./shared/utils/localStorage";
import { useCats } from "./domains/cats/useCats";

const queryClient = new QueryClient();

const voteToCateFromLocalStorage = (catId: string): number => {
  const cats = getCatsFromLocalStorage();
  const updatedCats = cats.map((cat) =>
    cat.id === catId ? { ...cat, votes: cat.votes + 1 } : cat
  );

  setLocalStorage("cats", updatedCats);

  return updatedCats?.find((cat) => cat.id === catId)?.votes || 0;
};

const getVoteCountFromLocalStorage = (): number => getLocalStorage("votesCount") || 0;
const incrementVoteCountFromLocalStorage = (): void =>
  setLocalStorage("votesCount", getVoteCountFromLocalStorage() + 1);

const AppContent: React.FC = () => {
  const { cats, isLoading } = useCats();
  if (isLoading) return <p>Chargement...</p>;
  if (!cats) return <p>Erreur lors du chargement des chats</p>;

  let catsWithVotes = resetCatsVoteFromLocalStorageIfNotDefined(cats);
  let votesCount = getVoteCountFromLocalStorage();

  const handleVote = (id: string) => {
    voteToCateFromLocalStorage(id);
    incrementVoteCountFromLocalStorage();
    votesCount = getVoteCountFromLocalStorage();
    catsWithVotes = resetCatsVoteFromLocalStorageIfNotDefined(cats);
  };

  return (
    <AppRoutes cats={catsWithVotes} votesCount={votesCount} handleVote={handleVote} />
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
