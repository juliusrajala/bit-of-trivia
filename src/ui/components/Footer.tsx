import * as React from 'react';
import styled from 'styled-components';
import { Link, Bar, Navi } from 'src/ui/styles';

const Footer = () => {
  return (
    <Bar>
      <Navi>
        <Link target="_blank" href="https://github.com/juliusrajala/bit-of-trivia">Source</Link>
      </Navi>
    </Bar>
  )
}

export default Footer;