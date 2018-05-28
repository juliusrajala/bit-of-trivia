import * as React from 'react';
import * as ReactDOM from 'react-dom';
import produce from 'immer';
import styled from 'styled-components';
import Router from 'src/core/Router';
import Header from 'src/ui/components/Header';
import Footer from 'src/ui/components/Footer';
import Drawer from 'src/ui/components/Drawer';

const Container = styled.section`
  background: url(assets/images/trianglify.svg) no-repeat center center fixed; 
  background-size: cover;
  height: 100vh;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

interface ConfigState {
  drawerOpen: boolean;
  authenticated: boolean;
  toggleDrawer: (Event) => void;
}

export const ConfigContext: React.Context<ConfigState> = React.createContext({
  drawerOpen: false,
  authenticated: false,
  toggleDrawer: (event: Event) => {},
});

class ConfigProvider extends React.Component<any, ConfigState> {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      authenticated: false,
      toggleDrawer: this.toggleDrawer,
    }
  }

  toggleDrawer = (event) => {
    event.preventDefault();
    console.log('Drawer toggled', this.state);
    const newState = produce(draft => {
      draft.drawerOpen = !this.state.drawerOpen;
    })
    this.setState(newState)
  }

  render() {
    return (
    <ConfigContext.Provider value={this.state}>
      <Container>{this.props.children}</Container>
    </ConfigContext.Provider>
    )
  }
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
  </ConfigProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('trivia-root')
);