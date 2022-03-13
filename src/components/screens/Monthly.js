import { useState, useEffect } from 'react'
import { getMonthly } from "../../AlphaVantageProvider"

const Monthly = ({ symbol }) => {
    const [metaData, setMetaData] = useState()
    const [monthly, setMonthly] = useState()

    useEffect(() => {
        async function getData() {
            const data = await getMonthly()
            //console.log(data.data["Meta Data"])
            setMetaData(data.data["Meta Data"])
            //console.log(data.data["Monthly Time Series"])
            setMonthly(data.data["Monthly Time Series"])
        }

        getData()
    }, [])

    return (
        <>
        <h2>Monthly - {symbol}</h2>
        <div>
            <h3>Meta Data</h3>
            {
                metaData &&
                Object.keys(metaData).map(item => (
                    <div key={item}><b>{item}</b> : {metaData[item]}</div>
                ))
            }
        </div>
        <div>
            <h3>Weekly Time Series</h3>
            {
                monthly &&
                Object.keys(monthly).map(month => (
                    <div key={month}>
                        <b>{month}</b>
                        <div>
                            {
                                Object.keys(monthly[month]).map(x => (
                                    <p key={x}><b>{ x }</b>: { monthly[month][x] }</p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Monthly

