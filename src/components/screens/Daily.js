import { useState, useEffect } from 'react'
import { getDaily } from "../../AlphaVantageProvider"

const Daily = ({ symbol }) => {
    const [metaData, setMetaData] = useState()
    const [daily, setDaily] = useState()

    useEffect(() => {
        async function getData() {
            const data = await getDaily()
            console.log(data.data["Meta Data"])
            setMetaData(data.data["Meta Data"])
            console.log(data.data["Time Series (Daily)"])
            setDaily(data.data["Time Series (Daily)"])
        }

        getData()
    }, [])

    return (
        <>
        <h2>Daily - {symbol}</h2>
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
            <h3>Daily Time Series</h3>
            {
                daily &&
                Object.keys(daily).map(day => (
                    <div key={day}>
                        <b>{day}</b>
                        <div>
                            {
                                Object.keys(daily[day]).map(x => (
                                    <p key={x}><b>{ x }</b>: { daily[day][x] }</p>
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

export default Daily

