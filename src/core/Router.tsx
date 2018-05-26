import { Map, fromJS } from 'immutable';
import * as React from 'react';
import Trivia from 'src/ui/views/TriviaView';
import Create from 'src/ui/views/CreateView';
import NotFound from 'src/ui/views/404View';
import About from 'src/ui/views/AboutView';
import { Container } from 'src/ui/styles';

type Route = {
  loader?: () => any;
  component: any;
};

type Routes = Map<any, Route>;

const routes: Routes = Map({
  '/': {
    component: Trivia,
  },
  '/new': {
    component: Create,
  },
  '/about': {
    component: About,
  },
  '/random': {
    component: Trivia,
    loader: () => Promise.resolve()
      .then(() => fromJS({
        trivia: 'Something something trivia',
        id: 'ff212f',
        author: 'Julius Rajala',
        scores: 90
      })),
  }
});

type RouterState = { url: string };
const initialState: RouterState = { url: window.location.pathname };

const Router = (props) => {
  const url = window.location.pathname;
  if (!routes.has(url)) return <NotFound />;
  const route = routes.get(url);
  const RouteComponent = route.component;

  return (
    <Container>
      <RouteComponent {...this.props} />
    </Container>
  )
}

export default Router;
