import { useState } from 'react';
import styled from 'styled-components';
import QuarterlyReports from './QuarterlyReportsTable';
import AnnualReports from './AnnualReports';
import { getIncomeStatements } from '../AlphaVantageProvider';

// TODO: Move api call to external js file?
// TODO: Break Content.js into smaller components
// TODO: On that note, more atomic elements (break things down)
// TODO: Switch Layout to CSS Grid, fixed dashboard tiles...Then make tiles drag'n'drop
// TODO: Tabbed layout by section (what sections?)

const Content = () => {
    const [searchTerm, setSearchTerm] = useState('Default');
    const [incomeReports, setIncomeReports] = useState({
        quarterlyReports: [],
        annualReports: [],
        symbol: ''
    });

    const getIncome = async (symbol) => {
        const response = await getIncomeStatements(symbol);

        setIncomeReports({
            quarterlyReports: response.data.quarterlyReports,
            annualReports: response.data.annualReports,
            symbol: response.data.symbol
        })  
    }

    return (
        <ContainerDivStyled>
            <CenteredContent>
                <input placeholder="Symbol..." onChange={e => setSearchTerm(e.target.value)} />
                <button onClick={() => getIncome(searchTerm)}>Search</button>
            </CenteredContent>
            <StlyedContent>
                <AnnualReports 
                    symbol={incomeReports.symbol} 
                    annualReports={incomeReports.annualReports} 
                />
                <QuarterlyReports 
                    symbol={incomeReports.symbol} 
                    quarterlyReports={incomeReports.quarterlyReports} 
                />
            </StlyedContent>
        </ContainerDivStyled>
    )
}

export default Content;

const CenteredContent = styled.div`
    padding-top: 1rem;
    padding-left: 1rem;
`

const ContainerDivStyled = styled.div`
    height: 85vh;
    width: 100vw;
    background-color: white;
    overflow-y: scroll;
`;

const StlyedContent = styled.div`
    padding-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

