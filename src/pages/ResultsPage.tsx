import React from "react";
import { Link } from "react-router-dom";
import { type Cat } from "../types/cat";
import "./ResultsPage.css";
import CatResult from "../components/CatResult/CatResult";

interface ResultsPageProps {
  cats: Cat[];
  matches: number; 
}

const ResultsPage: React.FC<ResultsPageProps> = ({ cats, matches }) => {
  const sorted = [...cats].sort((a, b) => b.votes - a.votes);

  const top3 = sorted.slice(0, 3);
  const others = sorted.slice(3);

  return (
    <div className="results-page">
      <header className="header">
        <h1>🐱 CATMASH</h1>
      </header>

      <section className="podium">
        <div className="podium-item second">
          <CatResult rank={2} name={top3[1]?.name || ""} url={top3[1]?.url || ""} votes={top3[1]?.votes || 0} />
        </div>

        <div className="podium-item first">
          <CatResult rank={1} name={top3[0]?.name || ""} url={top3[0]?.url || ""} votes={top3[0]?.votes || 0} />
        </div>

        <div className="podium-item third">
          <CatResult rank={3} name={top3[2]?.name || ""} url={top3[2]?.url || ""} votes={top3[2]?.votes || 0} />
        </div>
      </section>


      <section className="grid">
        {others.map((cat, i) => (
          <div key={cat.id} className="grid-item">
            <CatResult rank={i + 4} name={cat.name} url={cat.url} votes={cat.votes} />
          </div>
        ))}
      </section>

      <footer className="footer">
        <Link to="/vote">Revenir au vote</Link>
        <p>{matches} matchs joués</p>
      </footer>
    </div>
  );
};

export default ResultsPage;
