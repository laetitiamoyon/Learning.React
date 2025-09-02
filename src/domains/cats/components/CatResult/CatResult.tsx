import React from "react";
import "./CatResult.css";
import type { Cat } from "../../cats.model";

interface CatResultProps {
  cat: Cat;   
  rank: number;
}

const CatResult: React.FC<CatResultProps> = ({ cat, rank }) => {

  const { name, url, votes } = cat;

  return (
    <article className="result-item">
      <p className="rank">{rank}</p>
      <img src={url} alt={name} />
      <div className="cat-info">
        <p className="name">Chat {name}</p>
        <p className="votes">{votes} votes</p>
      </div>
    </article>
  );
};

export default CatResult;
