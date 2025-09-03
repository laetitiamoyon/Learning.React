import React from "react";
import "./CatCard.css";
import type { CatWithVotes } from "../../cats.model";

interface CatCardProps {
  cat: CatWithVotes;
  onVote: (id: string) => void;
}

const CatCard: React.FC<CatCardProps> = ({ cat: { id, url }, onVote }) => 
 <div className="cat-choice-card">
    <img src={url} alt={id} />
    <h2>Chat {id}</h2>
    <button onClick={() => onVote(id)}>J’aime ❤️</button>
  </div>

export default CatCard;
