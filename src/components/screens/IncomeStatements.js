import { useState, useEffect } from "react";
import QuarterlyReports from "../QuarterlyReportsTable";
import AnnualReports from "../AnnualReports";
import { getIncomeStatements } from '../../AlphaVantageProvider';

const IncomeStatements = ({ symbol = '' }) => {
    const [incomeReports, setIncomeReports] = useState({
        quarterlyReports: [],
        annualReports: []
    });

    useEffect( async () => {
        if (symbol !== '') {
            const response = await getIncomeStatements(symbol);
    
            setIncomeReports({
                quarterlyReports: response.data.quarterlyReports,
                annualReports: response.data.annualReports,
                symbol: response.data.symbol
            })  
        }
    }, [])

    return (
        <div>
            <AnnualReports 
                symbol={incomeReports.symbol} 
                annualReports={incomeReports.annualReports} 
            />
            <QuarterlyReports 
                symbol={incomeReports.symbol} 
                quarterlyReports={incomeReports.quarterlyReports} 
            />
        </div>
    )
}

export default IncomeStatements
