import axios from 'axios';

const API_KEY = '16RM7YB3WU85H52Z'

export const getIncomeStatements = async (symbol) => {
    const term = symbol.toUpperCase().trim();
    return await axios.get(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${term}&apikey=${API_KEY}`)
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const symbolSearch = async (searchTerm) => {
    return await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=16RM7YB3WU85H52Z`)
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}