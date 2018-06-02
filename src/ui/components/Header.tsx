import * as React from 'react';
import styled from 'styled-components';
import { Title, Bar, IconContainer, Icon, IconBar } from 'src/ui/styles';
import { ConfigContext } from 'src/core/ConfigProvider';

const Header = () => (
  <ConfigContext.Consumer>
    {(context) => (
      <Bar>
        <Title>Bit of Trivia</Title>
        <IconContainer>
          <Icon onClick={event => context.toggleDrawer(event)}>
            <IconBar />
            <IconBar />
            <IconBar />
          </Icon>
        </IconContainer>
      </Bar>
    ) }
  </ConfigContext.Consumer>
);

export default Header;