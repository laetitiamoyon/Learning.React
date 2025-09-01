import React from "react";
import "./CatCard.css";

interface CatCardProps {
  id: number;
  name: string;
  url: string;
  onVote: (id: number) => void;
}

const CatCard: React.FC<CatCardProps> = ({ id, name, url, onVote }) => {
  return (
    <div className="cat-choice-card">
      <img src={url} alt={name} />
      <h2>Chat {name}</h2>
      <button onClick={() => onVote(id)}>J’aime ❤️</button>
    </div>
  );
};

export default CatCard;
