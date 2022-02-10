import { useState } from 'react'
import styled from 'styled-components'
import { symbolSearch } from '../AlphaVantageProvider'

const SymbolSearch = () => {
    const [results, setResults] = useState([])
    
    const search = async (symbol = '') => {
        if (symbol.length > 0) {
            await symbolSearch(symbol).then(res => setResults(res.data.bestMatches))
        } else {
            setResults([])
        }
    }

    return (
        <SearchWrapper>
            <div>
                <Input type="text" placeholder="Symbol Search..." onChange={(e) => search(e.target.value)} />
                <ResultsContainer> 
                    {
                        results && results.map( (result, i) => <Result key={i}>{ result['1. symbol'] } - { result['2. name'] }</Result>)
                    }
                </ResultsContainer>
            </div>
        </SearchWrapper>
    )
}

export default SymbolSearch

const SearchWrapper = styled.div`
    
    margin-top: 1rem; 
    width: 30%;
`

const Button = styled.button`
    background-color:#ffbdbd;
`

const Input = styled.input`
    width:95%;
`

const Result = styled.p`
    color: #450091ed;
    margin-left: 10px; 
`

const ResultsContainer = styled.div`
    background-color: #ededed; 
    position: absolute; 
    border: 1px solid black;
    width: 29%;
`