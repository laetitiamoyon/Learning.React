import axios from 'axios';
import {useQuery} from 'react-query';

const useAlbums = () =>
{
    const {data} = useQuery("albums", async () =>
        (await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")).data)

    console.log(data)

    return data
};

export default useAlbums;
