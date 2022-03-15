import { useState, useEffect } from 'react'
import { getEarnings } from "../../AlphaVantageProvider"
// import LineChart from '../charts/d3/LineChart'
import LineChart from '../charts/chart-js/LineChart'

const Earnings = ({ symbol }) => {
    //const [earnings, setEarnings] = useState()
    const [annualEarnings, setAnnualEarnings] = useState()
    const [quarterlyEarnings, setQuarterlyEarnings] = useState()

    useEffect(() => {
        async function getData() {
            const response = await getEarnings()
            // console.log(data)
            // setEarnings(response)

            // massage data (move to server/API, clean up complexity here with simpler data access)
            // Annual 
            let annualEarningsArr = []
            response.data.annualEarnings.map(item => {
                // console.log(item)
                let justTheYear = item.fiscalDateEnding.split('-')[0]
                annualEarningsArr.push({ date: justTheYear, value: item.reportedEPS })
            })
            annualEarningsArr = annualEarningsArr.sort((a, b) => {
                if (a.date < b.date) return -1
                if (a.date > b.date) return 1
                else return 0
            })
            //console.log(annualEarningsArr)
            setAnnualEarnings(annualEarningsArr)

            // Quarterly 
            let quarterlyEarningsArr = []
            response.data.quarterlyEarnings.map(item => {
                //console.log(item)
                let dateArray = item.fiscalDateEnding.split('-')
                let monthAndYear = dateArray[1] + '/' + dateArray[0]
                quarterlyEarningsArr.push({ date: monthAndYear, value: item.reportedEPS })
            })
            // quarterlyEarningsArr = quarterlyEarningsArr.sort((a, b) => {

            //     if (a.x < b.x) return -1
            //     if (a.x > b.x) return 1
            //     else return 0
            // })
            quarterlyEarningsArr = quarterlyEarningsArr.reverse()

            //console.log(quarterlyEarningsArr)
            // setQuarterlyEarnings(response.data.quarterlyEarnings)
            setQuarterlyEarnings(quarterlyEarningsArr)
        }

        getData()
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ width: '45%' }}>
                <h2>Annual Earnings - {symbol}</h2>
                <LineChart xLabel={'Earnings Per Share'} dataSet1={annualEarnings} />
            </div>
            <div style={{ width: '45%' }}>
                <h2>Quarterly Earnings - {symbol}</h2>
                <LineChart xLabel={'Earnings Per Share'} dataSet1={quarterlyEarnings} />
            </div>
            {/* <div style={{ display: 'flex' }}>
                <div>
                    <h3>Annual Reports ( X: Year, Y: Reported EPS)</h3>
                    <div>
                        {
                            annualEarnings &&
                            annualEarnings.map((report, i) => (
                                <>
                                <div key={i}>
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
                    <h3>Quarterly Reports ( X: Month/Year, Y: Reported EPS)</h3>
                    <div>
                        {
                            quarterlyEarnings &&
                            quarterlyEarnings.map((report, i) => (
                                <>
                                <div key={i}>
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
            </div> */}
        </div>
    )
}

export default Earnings
