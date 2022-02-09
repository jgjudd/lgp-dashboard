import styled from 'styled-components';

const Table = ({ headers, content }) => {
    return (
        <div>
            <h3>Custom Table</h3>
            <table>
                <tbody>
                {
                    content.map( item => {
                        <tr>
                            {
                                Object.keys(item).map( key => {
                                    <td>{ item[key] }</td>
                                })
                            }
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table;

// const ContainerDivStyled = styled.div`
//     height: 90vh;
//     width: 100vw;
//     background-color: white;
//     overflow-y: scroll;
// `;

// const styledTable = styled.table`
//     border: 1px solid black;
//     border-collapse: collapse;
//     margin: auto auto;
//     width: 100%;

//     tr:nth-child(even) {
//         background-color: #e5e5e5;
//     }
// `

// const TH = styled.th`
//     border: 1px solid black;
//     padding-left: 10px;
//     padding-right: 10px;
// `;

// const TD = styled.td`
//     border: 1px solid black;
//     padding: .5rem;
// `;