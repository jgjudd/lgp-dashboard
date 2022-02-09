import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import styled from 'styled-components';

function App() {
  return (
    <GlobalStyleWrapperDiv>
      <Header />
      <Content />
      <Footer />
    </GlobalStyleWrapperDiv>
  );
}

export default App;

const GlobalStyleWrapperDiv = styled.div`
  height: 100vh;
`;