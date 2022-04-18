import usePlayers from "./usePlayers";
import {Player} from "../player.model";
import {useRouter} from "next/router";


export const usePlayer = () =>
{
    const { query : { id } } = useRouter()
    const players = usePlayers()
    const player = players?.find((p : Player) => p.id == id)

    return player
};

export default usePlayer;