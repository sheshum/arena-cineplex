import axios from 'axios';

export const REPERTOAR_GET_REPERTOAR = "REPERTOAR_GET_REPERTOAR";
const url = "https://api.mlab.com/api/1/databases/arenacineplex/collections/repertoar?apiKey=jNnNnruij1tLrOCwXDfWlDbyXhZOJNwN";
export function getRepertoarList(){

    const request = axios.get(url);
    
    return {
        type: REPERTOAR_GET_REPERTOAR,
        payload: request
    };
}