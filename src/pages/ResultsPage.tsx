import React from "react";
import { Link } from "react-router-dom";
import "./ResultsPage.css";
import CatResult from "../domains/cats/components/CatResult/CatResult";
import type { Cat } from "../domains/cats/cats.model";
import { sortedCatsByVotes } from "../domains/cats/cats.utils";

interface ResultsPageProps {
  cats: Cat[];
  votesCount: number; 
}

const ResultsPage: React.FC<ResultsPageProps> = ({ cats, votesCount: matches }) => {
  const { top3, others } = sortedCatsByVotes(cats);

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
            {/* domains/cats/cats.const.ts */}
            <CatResult rank={index + 4} cat={cat}  />
          </div>
        ))}
      </section>

      <footer className="footer">
        <Link to="/vote">Revenir au vote</Link>
        <p>{matches} matchs joués</p> {/* Pluralisés */}
      </footer>
    </div>
  );
};

export default ResultsPage;
