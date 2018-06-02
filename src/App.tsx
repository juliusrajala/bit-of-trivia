import * as React from 'react';
import * as ReactDOM from 'react-dom';
import produce from 'immer';
import styled from 'styled-components';
import Router from 'src/core/Router';
import Header from 'src/ui/components/Header';
import Footer from 'src/ui/components/Footer';
import Drawer from 'src/ui/components/Drawer';
import ConfigProvider, { ConfigContext } from 'src/core/ConfigProvider';
import history from 'browser-history';

const ReactApp = () => {
  return ReactDOM.render(
    <App />,
    document.getElementById('trivia-root')
  );
}

const App: React.SFC = () => (
  <ConfigProvider>
    <Header key="app-header" />
    <Drawer key="app-drawer" />
    <Router key="app-router" />
    <Footer />
  </ConfigProvider>
);

ReactApp();
