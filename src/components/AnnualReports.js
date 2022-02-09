import styled from 'styled-components';

const AnnualReports = ({ annualReports =[], symbol }) => {
    return (
        <div>
            { symbol && <h3>{ symbol } - Quarterly Income Reports</h3> }
            <Table>
                <tbody>
                <tr>
                    <TH>Year</TH>
                    <TH>Net Income</TH>
                    <TH>EBITDA</TH>
                    <TH>Total Revenue</TH>
                    <TH>R&D</TH>
                    <TH>Gross Profit</TH>
                    <TH>Income Before Tax</TH>
                    <TH>EBIT</TH>
                    <TH>Depreciation</TH>
                    <TH>Cost Of Revenue</TH>
                </tr>        
                {
                    annualReports.map((report, index) => (
                        <tr key={index}>
                            <TD>{ report.fiscalDateEnding }</TD>
                            <TD>{ report.netIncome }</TD>
                            <TD>{ report.ebitda }</TD>
                            <TD>{ report.totalRevenue }</TD>
                            <TD>{ report.researchAndDevelopment }</TD>
                            <TD>{ report.grossProfit }</TD>
                            <TD>{ report.incomeBeforeTax }</TD>
                            <TD>{ report.ebit }</TD>
                            <TD>{ report.depreciation }</TD>
                            <TD>{ report.costOfRevenue }</TD>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
}

export default AnnualReports;

const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    margin: auto auto;
    width: 100%;

    tr:nth-child(even) {
        background-color: #e5e5e5;
    }
`;

const TH = styled.th`
    border: 1px solid black;
    padding-left: 10px;
    padding-right: 10px;
`;

const TD = styled.td`
    border: 1px solid black;
    padding: .5rem;
`;
