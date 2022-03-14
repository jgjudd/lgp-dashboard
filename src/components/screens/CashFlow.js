import { useState, useEffect } from 'react'
import { getCashFlow } from "../../AlphaVantageProvider"

const CashFlow = ({ symbol }) => {
    const [cashFlow, setCashFlow] = useState()

    useEffect(() => {
        async function getData() {
            const data = await getCashFlow()
            console.log(data)
            setCashFlow(data)
        }

        getData()
    }, [])

    return (
        <>
        <h2>Cash Flow - {symbol}</h2>
        <div style={{ display: 'flex' }}>
            <div>
                <h3>Annual Reports</h3>
                <div>
                    {
                        cashFlow &&
                        cashFlow.data.annualReports.map((report, i) => (
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
                        cashFlow &&
                        cashFlow.data.quarterlyReports.map((report, i) => (
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

export default CashFlow
