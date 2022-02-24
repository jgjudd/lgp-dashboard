import { useEffect } from "react"
import { getMarketTelemetryData } from '../../AlphaVantageProvider'

const MarketData = () => {
    
    const market = {
        "GDP": 0,
        "GDP Per Capita": 0, 
        "Treasury Yield": 0,
        "Federal Funds Interest Rate": 0,
        "Consumer Price Index": 0,
        "Inflation": 0,
        "Expected Inflation": 0,
        "Consumer Sentiment": 0,
        "Retail Sales": 0,
        "Durable Goods Orders": 0, 
        "Unemployment Rate": 0,
        "Total Nonfarm Payroll": 0
    }

    useEffect(() => {

        getMarketTelemetryData()

    }, [])

    return (
        <div 
            style={{ 
                display: 'flex', 
                flexWrap: 'wrap'
            }}
        >
            {
                Object.keys(market).map((value, i) => {
                    return (
                        <div 
                            key={i} 
                            style={{ padding: '1rem', 
                            border: '1px solid black', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            margin: '1rem' }}
                        >
                            <p><b>{ value }</b></p>
                            <p>{ market[value] }</p>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default MarketData
