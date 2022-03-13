import { useState, useEffect } from "react"
import { getMarketTelemetryData } from '../../AlphaVantageProvider'
import styled from "styled-components";

const MarketData = () => {
    const [marketData, setMarketData] = useState([]);

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

    useEffect( () => {
        async function getData() {
            const response  = await getMarketTelemetryData()
            setMarketData(response)
        }

        getData();
    }, [])

    return (
        <div 
            style={{ 
                display: 'flex', 
                flexWrap: 'wrap'
            }}
        >
            {
                marketData && marketData.map((value, i) => {
                    return (
                        <div 
                            key={i} 
                            style={{ padding: '1rem', 
                                border: '1px solid black', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center'
                            }}
                        >
                            <p>{value.name}</p>

                            <div 
                                style={{
                                    overflowY: 'scroll',
                                    maxHeight: '25vh',
                                    width: '100%'
                                }}
                            >
                                <table
                                    style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        borderCollapse: 'collapse'
                                    }}
                                >
                                    <TR>
                                        <TH>{value.interval}</TH>
                                        <TH>{value.unit}</TH>
                                    </TR>
                                {
                                    value.data.map(x => 
                                        <TR>
                                            <TD>{x.date}</TD>
                                            <TD>{x.value}</TD>
                                        </TR>
                                    )
                                }
                                </table>
                            </div>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default MarketData
  
const TD = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`
const TH = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`
const TR = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`