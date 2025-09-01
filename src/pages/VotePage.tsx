import React from "react";
import { Link } from "react-router-dom";
import { type Cat } from "../types/cat";
import "./VotePage.css";  
import CatCard from "../components/CatCard/CatCard";

interface VotePageProps {
  cats: Cat[];
  onVote: (id: number) => void;
  matches: number;
  onMatch: () => void; 
}


const VotePage: React.FC<VotePageProps> = ({ cats, onVote, matches, onMatch }) => {

  if (cats.length < 2) return <p>Chargement...</p>;

  const [cat1, cat2] = [...cats]
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

    const handleVote = (id: number) => {
      onVote(id);
      onMatch(); 
    };
    

  return (
    <div className="vote-page">
      <header className="header">
        <h1>🐱 CATMASH</h1>
      </header>

      <div className="vote-container">
          <CatCard id={cat1.id} name={cat1.name} url={cat1.url} onVote={handleVote} />

        <div className="divider"></div>
          <CatCard id={cat2.id} name={cat2.name} url={cat2.url} onVote={handleVote} />
      </div>

      <footer className="footer">
        <Link to="/results">Voir le classement des chats</Link>
        <p>{matches} matchs joués</p>
      </footer>
    </div>
  );
};

export default VotePage;
