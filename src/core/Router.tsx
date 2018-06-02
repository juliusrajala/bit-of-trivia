import * as React from 'react';
import produce from 'immer';
import history from 'browser-history';
import { Container } from 'src/ui/styles';
import { splitRouteParams } from 'src/utils/routes';
import NotFound from 'src/ui/views/404View';

type RouterState = { url: string; };
const initialState = { url: '' };

const Context = React.createContext({});
const { Provider, Consumer } = Context;

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
    history((e, url) => this.setState(state => setUrl(state, url)));
  }

  render() {
    const { state, action, props } = this;

    return (
      <Provider value={{ state, action }}>
        {props.children}
      </Provider>
    );
  }
}


function setUrl(state: RouterState, url: string) {
  return produce(state, draft => { draft.url = url });
}

export default Router;
