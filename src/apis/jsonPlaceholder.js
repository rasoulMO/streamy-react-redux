//this is an instens of axios!!

import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});