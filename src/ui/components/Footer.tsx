import * as React from 'react';
import styled from 'styled-components';
import { Link, Bar, Navi, Title } from 'src/ui/styles';

const FooterBar = Bar.extend`
  justify-content: center;
  align-items: center;
  > * {
    font-size: 1.3rem;
  }

  > a {
    padding: 10px 0;
    :hover {
      color: #fff;
    }
  }

  @media (max-width: 500px), (max-device-width: 500px) {
    > * {
      font-size: 1rem;
    }
  }
`;

const Recognition = styled.p`
`;

const Footer = () => (
  <FooterBar>
    <Recognition>Started under the&nbsp;</Recognition>
    <Link target="_blank" href="https://spiceprogram.org">
      Spice Program
    </Link>
  </FooterBar>
)

export default Footer;