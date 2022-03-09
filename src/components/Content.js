import { useState } from 'react';
import styled from 'styled-components';

import IncomeStatements from './screens/IncomeStatements';
import MarketData from './screens/MarketData';
import Overview from './screens/Overview';
import BalanceSheets from './screens/BalanceSheets';
import CashFlow from './screens/CashFlow';
import Daily from './screens/Daily';
import Weekly from './screens/Weekly';
import Monthly from './screens/Monthly';
import Earnings from './screens/Earnings';
import EarningsCalendar from './screens/EarningsCalendar';

// TODO: Move api call to external js file?
// TODO: Break Content.js into smaller components
// TODO: On that note, more atomic elements (break things down)
// TODO: Switch Layout to CSS Grid, fixed dashboard tiles...Then make tiles drag'n'drop
// TODO: Tabbed layout by section (what sections?)
// TODO: Typescript (just for practice)
// TODO: Flask API 
// TODO: SQLite DB (to start with)

// TODO: Generic Market Data
// TODO: List of IPO's in the next 3, 6, 9 months (Endpoint = IPO Calendar, in Fundamental Data Section)
const Content = () => {
    const [screen, setScreen] = useState('MarketData');
    const [searchTerm, setSearchTerm] = useState('');

    const ComponentRegistry = {
        'IncomeStatements': <IncomeStatements symbol={searchTerm} />,
        'MarketData': <MarketData />,
        "Overview": <Overview />,
        "Daily": <Daily />,
        "Weekly": <Weekly />,
        "Monthly": <Monthly />,
        "BalanceSheets": <BalanceSheets />,
        "CashFlow": <CashFlow />,
        "Earnings": <Earnings />,
        "EarningsCalendar": <EarningsCalendar />
    }

    return (
        <ContainerDivStyled>
            <CenteredContent>
                <div>
                    <input placeholder="Symbol..." 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)} 
                    />
                    <button onClick={() => setSearchTerm(searchTerm)}>Search</button>
                </div>
                <div>
                    <button onClick={() => setScreen('MarketData')}>Market Data</button>
                    <button onClick={() => setScreen('Overview')}>Overview</button>
                    <button onClick={() => setScreen('Daily')}>Daily</button>
                    <button onClick={() => setScreen('Weekly')}>Weekly</button>
                    <button onClick={() => setScreen('Monthly')}>Monthly</button>
                    <button onClick={() => setScreen("IncomeStatements")}>Income Statements</button>
                    <button onClick={() => setScreen("BalanceSheets")}>Balance Sheets</button>
                    <button onClick={() => setScreen("CashFlow")}>Cash Flow</button>
                    <button onClick={() => setScreen("Earnings")}>Earnings</button>
                    <button onClick={() => setScreen("EarningsCalendar")}>Earnings Calendar</button>                    
                </div>
            </CenteredContent>
            <StlyedContent>
                {
                    ComponentRegistry[screen]
                }
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

