import styled from 'styled-components';
import SymbolSearch from './SymbolSearch';

const Header = () => {
    return (
        <HeaderStyled>
            <Logo>LGP</Logo>
            <SymbolSearch />
        </HeaderStyled>
    )
}

export default Header;

const HeaderStyled = styled.header`
    height: 10vh;
    width: 100vw;
    background-color: #450091ed;
    color: white;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.span`
    color: white;
`