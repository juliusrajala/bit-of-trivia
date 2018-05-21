import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import Router from 'src/core/Router';
import Header from 'src/ui/components/Header';
import Footer from 'src/ui/components/Footer';
import { Map, fromJS } from 'immutable';
import { Trivia } from 'src/core/records';
import { loadTrivia } from 'src/core/loaders';

const Container = styled.section`
  background: #396afc;
  background: -webkit-linear-gradient(to right, #396afc, #2948ff);
  background: linear-gradient(to right, #396afc, #2948ff);
  height: 100vh;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadTrivia,
      trivia: Map<string, Trivia>(),
    }
  }

  render() {
    return(
      <Container>
        <Header />
        <Router />
        <Footer />
      </Container>
    );
  } 
}

ReactDOM.render(
  <App />,
  document.getElementById('trivia-root')
);