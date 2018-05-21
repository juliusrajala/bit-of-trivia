import * as React from 'react';
import styled from 'styled-components';
import { Link, Title, Bar, Navi } from 'src/ui/styles';

const Header = () => {
  return (
    <Bar>
      <Title>Bit of Trivia</Title>
      <Navi>
        <Link href="/new">New</Link>
        <Link href="/random">Random</Link>
        <Link href="/about">Motivation</Link>
      </Navi>
    </Bar>
  )
}

export default Header;