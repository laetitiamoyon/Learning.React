export interface Player
{
    id : number,
    firstname : string,
    lastname : string,
    shortname: string,
    sex: string,
    picture : string,
    data : {
        rank: number,
        points: number,
        weight: number,
        height: number,
        age: number
    }
}