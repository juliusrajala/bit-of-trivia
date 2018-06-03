import * as React from 'react';
import styled from 'styled-components';
import { Container, Card, CardTitle, BreadText } from 'src/ui/styles';
import TriviaProvider from 'src/core/TriviaProvider';

const TEMP_TRIVIA = 'Giraffes and humans have the same amount of vertebrae. Both species have seven!';

const TriviaView = (props) => {
  const { id } = props;
  return (
    <TriviaProvider>
      {(context) => {
        const { state, actions } = context;
        if (!state.fetched.includes(id)) {
          actions.fetchTrivia(id);
          return <span>Loading</span>;
        }

        return (
          <Card>
            <CardTitle>Did you know?</CardTitle>
            <BreadText>{TEMP_TRIVIA}</BreadText>
          </Card>
        );
      }}
    </TriviaProvider>
  )
}

export default TriviaView;