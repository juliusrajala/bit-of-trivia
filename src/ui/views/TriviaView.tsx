import * as React from 'react';
import { Container, Card, CardTitle, BreadText } from 'src/ui/styles';
import styled from 'styled-components';

const TEMP_TRIVIA = 'Giraffes and humans have the same amount of vertebrae. Both species have seven!';

const TriviaView = () => (
  <Container>
    <Card>
      <CardTitle>Did you know?</CardTitle>
      <BreadText>{TEMP_TRIVIA}</BreadText>
    </Card>
  </Container>
)

export default TriviaView;