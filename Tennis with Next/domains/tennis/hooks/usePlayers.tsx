import {useQuery} from "react-query";
import axios from "axios";

export const usePlayers = () => {
    const {data} = useQuery("players", async () =>
        (await axios.get("https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json")).data)

    return data?.players
};

export default usePlayers;
