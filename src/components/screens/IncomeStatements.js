import { useState, useEffect } from 'react'
import { getIncomeStatements } from "../../AlphaVantageProvider"

const IncomeStatements = ({ symbol }) => {
    const [incomeStatements, setIncomeStatements] = useState()

    useEffect(() => {
        async function getData() {
            const data = await getIncomeStatements()
            console.log(data)
            setIncomeStatements(data)
        }

        getData()
    }, [symbol])

    return (
        <>
        <h2>Income Statements - {symbol}</h2>
        <div style={{ display: 'flex' }}>
            <div>
                <h3>Annual Reports</h3>
                <div>
                    {
                        incomeStatements &&
                        incomeStatements.data.annualReports.map((report, i) => (
                            <>
                            <div key={i}>
                                {
                                    Object.keys(report).map(key => (
                                        <p key={key}><b>{key}</b> {report[key]}</p>
                                    ))
                                }
                            </div>
                            <p>--------------------------------------------------------------</p>
                            </>
                        ))
                    }
                </div>
            </div>
            <div>
                <h3>Quarterly Reports</h3>
                <div>
                    {
                        incomeStatements &&
                        incomeStatements.data.quarterlyReports.map((report, i) => (
                            <>
                            <div key={i}>
                                {
                                    Object.keys(report).map(key => (
                                        <p key={key}><b>{key}</b> {report[key]}</p>
                                    ))
                                }
                            </div>
                            <p>--------------------------------------------------------------</p>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default IncomeStatements


