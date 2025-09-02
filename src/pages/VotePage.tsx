import React from "react";
import { Link } from "react-router-dom";
import "./VotePage.css";  
import CatCard from "../domains/cats/components/CatCard/CatCard";
import type { Cat } from "../domains/cats/cats.model";
import { getTwoFirstCats } from "../domains/cats/cats.utils";

interface VotePageProps {
  cats: Cat[];
  onVote: (id: string) => void;
  votesCount: number;
}


const VotePage: React.FC<VotePageProps> = ({ cats, onVote, votesCount }) => {

  if (cats.length < 2) return <p>Erreur lors de la récupération des chats...</p>; 

  const [cat1, cat2] = getTwoFirstCats(cats);

  return (
    <div className="vote-page">
      <header className="header">
        <h1>🐱 CATMASH</h1>
      </header>

      <div className="vote-container">
          <CatCard cat={cat1} onVote={onVote} />

        <div className="divider"></div>
          <CatCard cat={cat2} onVote={onVote} />
      </div>

      {votesCount > 0 && <footer className="footer">
        <Link to="/results">Voir le classement des chats</Link> 
        <p>{votesCount} matchs {votesCount > 1 ? "joués" : "joué" }</p> 
      </footer>}
    </div>
  );
};

export default VotePage;
