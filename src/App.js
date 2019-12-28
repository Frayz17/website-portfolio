import React from 'react';
import Container from '@material-ui/core/Container';
import Navigation from 'modules/Navigation';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <div>opopop</div>

        {/* <Navbar />
      <Hero />
      <Carousel />
      <Skills />
      <Contacts />
      <Footer /> */}
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
