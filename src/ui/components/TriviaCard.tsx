import * as React from 'react';
import { Container, Card, CardTitle, BreadText } from 'src/ui/styles';
import { TriviaContext } from 'src/App';

class TriviaCard extends React.Component {
  getDerivedStateFromProps(nextProps, prevState) {

  }
  
  renderCardContent() {
    return (
      <TriviaContext.Consumer>
        {trivia => (
          <Card>
            
          </Card>
        ) }
      </TriviaContext.Consumer>
    )
  }

  render() {
    return (
      <Container>
        <Card>
          {this.renderCardContent()}
        </Card>
      </Container>
    );
  }
}