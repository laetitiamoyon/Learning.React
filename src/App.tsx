import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import ResultsPage from "./pages/ResultsPage";
import { type Cat } from "./types/cat";
import { fetchCats } from "./api/fetchCats";
import VotePage from "./pages/VotePage";

const queryClient = new QueryClient();


const AppContent: React.FC = () => {
  const { data: cats, isLoading } = useQuery<Cat[]>({
    queryKey: ["cats"],
    queryFn: fetchCats,
  });

  const [votes, setVotes] = useState<Record<number, number>>({});
  const [matches, setMatches] = useState(0);

const handleMatch = () => setMatches((m) => m + 1);


  const handleVote = (id: number) => {
    setVotes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  if (isLoading) return <p>Chargement...</p>;
  if (!cats) return <p>Erreur lors du chargement des chats</p>;

  const catsWithVotes = cats.map((cat) => ({
    ...cat,
    votes: votes[cat.id] || 0,
  }));

  return (
  <Routes>
    <Route
      path="/"
      element={<VotePage cats={catsWithVotes} onVote={handleVote} matches={matches} onMatch={handleMatch} />}
    />
    <Route
      path="/vote"
      element={<VotePage cats={catsWithVotes} onVote={handleVote} matches={matches} onMatch={handleMatch} />}
    />
    <Route
      path="/results"
      element={<ResultsPage cats={catsWithVotes} matches={matches} />}
    />
  </Routes>
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
