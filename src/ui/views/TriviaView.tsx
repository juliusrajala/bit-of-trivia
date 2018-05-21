import * as React from 'react';
import { Container, Card, CardTitle } from 'src/ui/styles';
import styled from 'styled-components';

const TEMP_TRIVIA = 'Giraffes and humans have the same amount of vertebrae. Both species have seven!';

const Trivia = styled.p`
  padding: 10px;
`;

const TriviaView = () => (
  <Container>
    <Card>
      <CardTitle>Did you know?</CardTitle>
      <Trivia>{TEMP_TRIVIA}</Trivia>
    </Card>
  </Container>
)

export default TriviaView;