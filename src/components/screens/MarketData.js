import { useState, useEffect } from "react"
import { getMarketTelemetryData } from '../../AlphaVantageProvider'
import LineChart from '../charts/chart-js/LineChart'
import styled from "styled-components";
import { Line } from "react-chartjs-2";

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

            console.log(response)

            // let marketArr = []
            // response.data.annualEarnings.map(item => {
            //     // console.log(item)
            //     let justTheYear = item.fiscalDateEnding.split('-')[0]
            //     marketArr.push({ date: justTheYear, value: item.reportedEPS })
            // })

            response.map(item => (
                item.data = item.data.sort((a, b) => {
                    if (a.date < b.date) return -1
                    if (a.date > b.date) return 1
                    else return 0
                })
            ))

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
                                flexGrow: '1',
                                width: '33%'
                            }}
                        >
                            <h4>{value.name}</h4>
                            <LineChart 
                                xLabel={`(Interval: ${value.interval}, Units: ${value.unit})`} 
                                dataSet1={value.data} 
                            />
                            {/* <p>{value.name}</p>

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
                                    <tbody>
                                        <TR>
                                            <TH>{value.interval}</TH>
                                            <TH>{value.unit}</TH>
                                        </TR>
                                        {
                                            value.data.map((x, i) => 
                                                <TR key={i}>
                                                    <TD>{x.date}</TD>
                                                    <TD>{x.value}</TD>
                                                </TR>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div> */}
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