import * as React from 'react';
import { Container, Card, CardTitle, BreadText } from 'src/ui/styles';
import styled from 'styled-components';

const TEMP_TRIVIA = 'Giraffes and humans have the same amount of vertebrae. Both species have seven!';

type TriviaParams = {
  id?: string;
  author?: string;
}

interface TriviaProps {
  params?: TriviaParams;
  loader: (string) => any;
}

interface TriviaState {
  isLoading: boolean;
  isError: boolean;
  triviaId: string;
}

class TriviaView extends React.Component<TriviaProps, TriviaState> {
  constructor(props) {
    const { id } = props.params;
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      triviaId: id || 'random',
    }
  }

  componentDidMount() {
    const { loader, params } = this.props;
    console.log(loader, this.props);
    if (!loader) return;
    loader(params.id).then((data) => console.log(data.toJS()))
  }

  render() {

    return (
      <Card>
        <CardTitle>Did you know?</CardTitle>
        <BreadText>{TEMP_TRIVIA}</BreadText>
      </Card>
    );
  }
}

export default TriviaView;