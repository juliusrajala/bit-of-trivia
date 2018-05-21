import * as React from 'react';
import styled from 'styled-components';
import { Link, Title } from 'src/ui/styles';

const NaviBar = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  font-family: Montserrat, sans-serif;
`;

const Navi = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Navigation = () => {
  return (
    <NaviBar>
      <Title>Bit of Trivia</Title>
      <Navi>
        <Link href="/new">New</Link>
        <Link href="/random">Random</Link>
        <Link href="/about">Motivation</Link>
      </Navi>
    </NaviBar>
  )
}

export default Navigation;