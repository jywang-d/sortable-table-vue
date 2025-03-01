import axios from "axios";

// create axios instance for api calls
const BASE_URL = 'https://my-json-server.typicode.com/jywang-d/sortable-table-vue/';

const createAPICall = axios.create({
    baseURL: BASE_URL,
    withCredentials:false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    //**get all records from db */
    async getRecords() {
        try {
            return await createAPICall.get('records');
        } catch (error) {
            console.log(error);
        }
    }
}