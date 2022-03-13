import { useState, useEffect } from 'react'
import { getCompanyOverview } from "../../AlphaVantageProvider"

const Overview = ({ symbol }) => {
    const [overview, setOverview] = useState()

    useEffect(() => {
        async function getData() {
            const data = await getCompanyOverview()
            console.log(data)
            setOverview(data.data)
        }

        getData()
    }, [])

    return (
        <>
        <h2>Company Overview - {symbol}</h2>
        <div style={{ display: 'flex' }}>
            <div>
                {
                    overview &&
                    <div>
                        {
                            Object.keys(overview).map(key => (
                                <p key={key}><b>{key}</b> {overview[key]}</p>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default Overview

