import { useState, useEffect } from 'react'
import { getEarnings } from "../../AlphaVantageProvider"

const Earnings = ({ symbol }) => {
    const [earnings, setEarnings] = useState()

    useEffect(() => {
        async function getData() {
            const data = await getEarnings()
            console.log(data)
            setEarnings(data)
        }

        getData()
    }, [])

    return (
        <>
        <h2>Earnings - {symbol}</h2>
        <div style={{ display: 'flex' }}>
            <div>
                <h3>Annual Reports</h3>
                <div>
                    {
                        earnings &&
                        earnings.data.annualEarnings.map(report => (
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
                        earnings &&
                        earnings.data.quarterlyEarnings.map(report => (
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

export default Earnings
