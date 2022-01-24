import usePlayers from './usePlayers'
import {Player} from "../domains/tennis/player.model";

const UseBestPlayers = () =>
{
    const players = usePlayers()

    const bestPlayer = players?.sort((a: Player, b: Player) => a.data.rank - b.data.rank)

    return bestPlayer
};

export default UseBestPlayers;