import React from "react";
import { Link } from "react-router-dom";
import "./ResultsPage.css";
import CatResult from "../domains/cats/components/CatResult/CatResult";
import { sortedCatsByVotes } from "../domains/cats/cats.utils";
import { useCats } from "../domains/cats/hooks/useCats";
import { getVoteCountFromLocalStorage, resetCatsVoteFromLocalStorageIfNotDefined } from "../domains/cats/cats.localStorage";
import Loading from "../domains/cats/components/Loading";
import Error from "../domains/cats/components/Error";
import { RANK_OFFSET } from "../domains/cats/cats.const";

const ResultsPage: React.FC = () => {
  const { cats, isLoading, isError } = useCats();
  const catsWithVotes = resetCatsVoteFromLocalStorageIfNotDefined(cats);
  const top3 = sortedCatsByVotes(catsWithVotes).slice(0, 3);
  const others = sortedCatsByVotes(catsWithVotes).slice(3);
  const votesCount = getVoteCountFromLocalStorage()

  if (isLoading) return <Loading />;
  if (!cats || isError) return <Error message="Erreur lors du chargement du classement des chats" />;

  return (
    <div className="results-page">
      <header className="header">
        <h1>🐱 CATMASH</h1>
      </header>

      <section className="podium">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`podium-item ${i === 0 ? "first" : i === 1 ? "second" : "third"}`}>
            <CatResult rank={i + 1} cat={top3[i]} />
          </div>
        ))}
      </section>


      <section className="grid">
        {others.map((cat, index) => (
          <div key={index} className="grid-item">
            <CatResult rank={index + RANK_OFFSET} cat={cat}  />
          </div>
        ))}
      </section>

      <footer className="footer">
        <Link to="/vote">Revenir au vote</Link>
        <p>{votesCount} match{votesCount > 1 && `s`} joué{votesCount > 1 && `s`}</p>
      </footer>
    </div>
  );
};

export default ResultsPage;
