import { useState, useEffect } from 'react'
import { getWeekly } from "../../AlphaVantageProvider"

const Weekly = ({ symbol }) => {
    const [metaData, setMetaData] = useState()
    const [weekly, setWeekly] = useState()

    useEffect(() => {
        async function getData() {
            const data = await getWeekly()
            //console.log(data.data["Meta Data"])
            setMetaData(data.data["Meta Data"])
            //console.log(data.data["Weekly Time Series"])
            setWeekly(data.data["Weekly Time Series"])
        }

        getData()
    }, [])

    return (
        <>
        <h2>Weekly - {symbol}</h2>
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
                weekly &&
                Object.keys(weekly).map(week => (
                    <div key={week}>
                        <b>{week}</b>
                        <div>
                            {
                                Object.keys(weekly[week]).map(x => (
                                    <p key={x}><b>{ x }</b>: { weekly[week][x] }</p>
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

export default Weekly

