import * as React from 'react';
import styled from 'styled-components';
import { Title, Bar, IconContainer, Icon, IconBar } from 'src/ui/styles';

interface HeaderProps { toggleDrawer: (Event) => void };

const Header = (props: HeaderProps) => {
  const { toggleDrawer } = props;
  return (
    <Bar>
      <Title>Bit of Trivia</Title>
      <IconContainer>
        <Icon onClick={event => toggleDrawer(event)}>
          <IconBar />
          <IconBar />
          <IconBar />
        </Icon>
      </IconContainer>
    </Bar>
  )
}

export default Header;