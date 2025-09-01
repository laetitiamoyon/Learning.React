import React from "react";
import "./CatResult.css";

interface CatResultProps {
  name: string;
  url: string;
  votes: number;
  rank?: number;
}

const CatResult: React.FC<CatResultProps> = ({ name, url, votes, rank }) => {
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
