import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VotePage.css";  
import CatCard from "../domains/cats/components/CatCard/CatCard";
import { voteToCatFromLocalStorage, incrementVoteCountFromLocalStorage, resetCatsVoteFromLocalStorageIfNotDefined, getVoteCountFromLocalStorage } from "../domains/cats/cats.localStorage";
import Error from "../domains/cats/components/Error";
import { useCats } from "../domains/cats/hooks/useCats";
import { shuffle } from "../shared/utils/array/shuffle";
import Loading from "../domains/cats/components/Loading";

const VotePage: React.FC = () => {
  const { cats, isLoading, isError } = useCats();
  const catsWithVotes = resetCatsVoteFromLocalStorageIfNotDefined(cats);

  const [firstCat, secondCat] = shuffle(catsWithVotes).slice(0,2)
  const [votesCount, setVotesCount] = useState(getVoteCountFromLocalStorage());

  const handleVote = (id: string) => {
    voteToCatFromLocalStorage(id);
    incrementVoteCountFromLocalStorage();
    setVotesCount(getVoteCountFromLocalStorage());
  };

  if (isLoading) return <Loading />;
  if (isError || catsWithVotes.length < 2) return <Error message="Oups 😿 Impossible de trouver deux chats à comparer." />;


  return (
    <div className="vote-page">
      <header className="header">
        <h1>🐱 CATMASH</h1>
      </header>

      <div className="vote-container">
          <CatCard cat={firstCat} onVote={handleVote} />

        <div className="divider"></div>
          <CatCard cat={secondCat} onVote={handleVote} />
      </div>

      {votesCount > 0 && <footer className="footer">
        <Link to="/results">Voir le classement des chats</Link> 
        <p>{votesCount} match{votesCount > 1 && `s`} joué{votesCount > 1 && `s`}</p>
      </footer>}
    </div>
  );
};

export default VotePage;
