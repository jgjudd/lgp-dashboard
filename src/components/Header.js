import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <ContentStyled>LGP</ContentStyled>
        </HeaderStyled>
    )
}

export default Header;

const HeaderStyled = styled.header`
    height: 5vh;
    width: 100vw;
    background-color: #450091ed;
    color: white;
`;

const ContentStyled = styled.div`
    padding-top: 10px;
    padding-left: 10px;
`;