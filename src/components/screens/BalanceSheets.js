import { useState, useEffect } from 'react'
import { getBalanceSheets } from "../../AlphaVantageProvider"

const BalanceSheets = ({ symbol }) => {
    const [balanceSheets, setBalanceSheets] = useState()

    useEffect(() => {
        async function getData() {
            const data = await getBalanceSheets()
            console.log(data)
            setBalanceSheets(data)
        }

        getData()
    }, [])

    return (
        <>
        <h2>Balance Sheets - {symbol}</h2>
        <div style={{ display: 'flex' }}>
            <div>
                <h3>Annual Reports</h3>
                <div>
                    {
                        balanceSheets &&
                        balanceSheets.data.annualReports.map(report => (
                            <>
                            <div>
                                {
                                    Object.keys(report).map(key => (
                                        <p><b>{key}</b> {report[key]}</p>
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
                        balanceSheets &&
                        balanceSheets.data.quarterlyReports.map(report => (
                            <>
                            <div>
                                {
                                    Object.keys(report).map(key => (
                                        <p><b>{key}</b> {report[key]}</p>
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

export default BalanceSheets

