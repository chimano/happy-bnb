import axios from 'axios';

export function getRentals(quality){
    return axios.get('http://localhost:3001/rentals', {
        params: {
            quality: quality
        }
    });
}
