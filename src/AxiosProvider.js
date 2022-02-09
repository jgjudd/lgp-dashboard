import axios from 'axios';

const API_KEY = '16RM7YB3WU85H52Z'

const Axios = {
    getIncomeStatement: async (symbol) => {
        const term = symbol.toUpperCase().trim();
        
        return await axios.get(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${term}&apikey=${API_KEY}`)
                            //.then(res => console.log(res))
                            .catch(err => console.log(err));
    }
}

export default Axios;
