import * as React from 'react';
import * as regexp from 'path-to-regexp';
import * as history from 'browser-history';
import produce from 'immer';
import { Container } from 'src/ui/styles';

type RouterState = {
  url: string;
}

type RouterContext = {
  state: RouterState;
  action: {
    goTo: (string) => void;
  }
}

const Context = React.createContext({state: {}, action: {}});
const { Provider, Consumer } = Context;
const initialState = { url: '' };

class Router extends React.Component<any, RouterState> {
  state: RouterState = produce(
    initialState, draft => { draft.url = window.location.pathname }
  );

  action = {
    goTo: (url) => this.setState(
      state => setUrl(state, url),
      () => history(url),
    )
  }

  componentDidMount() {
    history((e, url) => this.setState(
      state => setUrl(state, url)
    ))
  }

  render() {
    const { state, action, props } = this;

    return (
      <Container>
        <Provider value={{ state, action }}>
          {props.children}
        </Provider>
      </Container>
    );
  }
}

export const Route = (props: any) => (
  <Consumer>
    {({state, action}: RouterContext) => {
      console.log('RouteContext is', state);
      const re = regexp(props.path)
      if (re.test(state.url)) return <props.component { ...props } />;
    }}
  </Consumer>
);

function setUrl(state: RouterState, url: string) {
  return produce(state, draft => { draft.url = url });
}

export default Router;
