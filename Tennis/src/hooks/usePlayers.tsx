import React from 'react';
import {useQuery} from "react-query";
import axios from "axios";

const UsePlayers = () => {

    const {data} = useQuery("players", async () =>
        (await axios.get("https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json")).data)
    console.log(data)
    return data?.players


};

export default UsePlayers;