import * as React from 'react';
import { Map } from 'immutable';
import { Card, CardTitle, Button, AlignRight } from 'src/ui/styles';
import styled from 'styled-components';

const initialState = Map({
  trivia: '',
});

const TextField = styled.input`
  border: none;
  padding: 20px;
  border-radius: 3px;
  font-size: 1.2rem;
  background-color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  margin: 10px;

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
        <CardTitle>Write down your trivia</CardTitle>
        <TextField onChange={this.setText} />
        <AlignRight>
          <Button>Submit</Button>
        </AlignRight>
      </Card>
    );
  }
} 

export default CreateView;