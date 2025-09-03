import React from "react";
import "./CatResult.css";
import type { CatWithVotes } from "../../cats.model";

interface CatResultProps {
  cat: CatWithVotes;   
  rank: number;
}

const CatResult: React.FC<CatResultProps> = ({ cat: { votes, id, url }, rank }) => 
  <article className="result-item">
    <p className="rank">{rank}</p>
    <img src={url} alt={id} />
    <div className="cat-info">
      <p className="name">Chat {id}</p>
      <p className="votes">{votes} votes</p>
    </div>
  </article>

export default CatResult;
