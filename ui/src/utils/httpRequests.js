import axios from 'axios';

export function getRentals(c){
    return axios.get('http://localhost:3001/rentals', {
        params: {
            category: c
        }
    });
}
