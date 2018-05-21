import * as React from 'react';
import { Container, Card, CardTitle, BreadText } from 'src/ui/styles';
import styled from 'styled-components';

const MOTIVATION_TEXT = `
  I realized a while back that I'm pretty terrible at bar trivia.

  This app exists to fix the situation. We thought it would be nice
  to provide others with the same opportunity.
`

const AboutView = (props) => (
  <Container>
    <Card>
      <CardTitle>What is this?</CardTitle>
      <BreadText>{MOTIVATION_TEXT}</BreadText>
    </Card>
  </Container>
)

export default AboutView;