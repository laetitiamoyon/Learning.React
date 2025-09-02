import React from "react";
import "./CatCard.css";
import type { Cat } from "../../cats.model";

interface CatCardProps {
  cat: Cat;
  onVote: (id: string) => void;
}

const CatCard: React.FC<CatCardProps> = ({ cat, onVote }) => {
  const { id, name, url } = cat;
  return <div className="cat-choice-card">
    <img src={url} alt={name} />
    <h2>Chat {name}</h2>
    <button onClick={() => onVote(id)}>J’aime ❤️</button>
  </div>
};

export default CatCard;
