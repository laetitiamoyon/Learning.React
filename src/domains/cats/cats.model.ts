export interface ApiCat {
    id: string;      
    url: string;   
  }
  
  export interface Cat extends ApiCat {
    name: string;
    votes: number;
  }
    