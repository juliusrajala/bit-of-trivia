import * as React from 'react';
import { Map } from 'immutable';
import { Card, CardTitle } from 'src/ui/styles';
import styled from 'styled-components';

const initialState = Map({
  trivia: '',
});

const TextField = styled.textarea`
  border: 2px solid rgba(57, 106, 252, .24);
  min-height: 100px;
  width: 100%;
  padding: 10px;
  border-radius: 1px;
  font-size: 1.2rem;
  font-family: Merriweather, serif;

  :focus {
    outline: none;
  }
`;

class CreateView extends React.Component {
  state = initialState;

  setText(event) {
    event.preventDefault();
    const targetValue = event.target.value;
    const newState = this.state.set('trivia', targetValue);
   
    this.setState(newState);
  }

  render(){
    return (
      <Card>
        <CardTitle>Add your trivia</CardTitle>
        <TextField onChange={this.setText} />
      </Card>
    );
  }
} 

export default CreateView;