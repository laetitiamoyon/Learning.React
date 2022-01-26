import {useParams} from "react-router-dom";
import usePlayers from "./usePlayers";
import {Player} from "../domains/tennis/player.model";

type RoutesProps = {
    id: string
}

const UsePlayer = () =>
{
    const { id } = useParams<RoutesProps>()
    const players = usePlayers()
    const player = players?.find((p : Player) => p.id === id)
    const player = players?.find((p : Player) => p.id == id)

    return player
};

export default UsePlayer;