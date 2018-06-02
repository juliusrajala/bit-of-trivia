import * as React from 'react';
import * as ReactDOM from 'react-dom';
import produce from 'immer';
import styled from 'styled-components';
import Router from 'src/core/Router';
import Header from 'src/ui/components/Header';
import Footer from 'src/ui/components/Footer';
import Drawer from 'src/ui/components/Drawer';
import ConfigProvider, { ConfigContext } from 'src/core/ConfigProvider';

const ReactApp = () => {

  return ReactDOM.render(
    <App />,
    document.getElementById('trivia-root')
  );
}

const App: React.SFC = props => (
  <ConfigProvider>
    <ConfigContext.Consumer>
      {(context) => [
        <Header key="app-header" toggleDrawer={context.toggleDrawer} />,
        <Drawer
          key="app-drawer"
          drawerOpen={context.drawerOpen}
          toggleDrawer={context.toggleDrawer}
        />,
      ] }
    </ConfigContext.Consumer>
    <Router key="app-router" />
    <Footer />
  </ConfigProvider>
);

ReactApp();
