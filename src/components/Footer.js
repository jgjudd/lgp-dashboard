import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>
            footer from child
        </FooterStyled>
    )
}

export default Footer;

const FooterStyled = styled.footer`
    height: 5vh;
    width: 100vw;
    background-color: #505050d1;
    color: white;
`;