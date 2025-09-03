export interface Cat { 
    id: string;      
    url: string;   
}
  
export interface CatWithVotes extends Cat {
  votes: number;
}
    