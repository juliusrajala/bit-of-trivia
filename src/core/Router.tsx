import { Map } from 'immutable';
import * as React from 'react';
import Quote from 'src/ui/views/QuoteView';
import Create from 'src/ui/views/CreateView';
import NotFound from 'src/ui/views/404View';

type Route = {
  loader?: () => null;
  component: any;
};

type Routes = Map<any, Route>;

const routes: Routes = Map({
  '/': {
    component: Quote,
  },
  '/new': {
    component: Create,
  }
});
type RouterState = { url: string };
const initialState: RouterState = { url: window.location.pathname };

class Router extends React.Component {
  state: RouterState = initialState;

  componentDidMount() {
    window.addEventListener('popstate', (event) => {
      event.preventDefault();
      console.log(event);
    })
  }

  componentWillUnmount() {

  }

  render(){
    const { url } = this.state;
    if (!routes.has(url)) return <NotFound />;

    const RouteComponent = routes.get(url).component;
    return <RouteComponent {...this.props} />;
  }
}

export default Router;
