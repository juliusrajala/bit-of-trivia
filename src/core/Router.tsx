import { Map } from 'immutable';
import * as React from 'react';
import Quote from 'src/ui/views/QuoteView';
import Create from 'src/ui/views/CreateView';

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

export default (window): any => {
  const { location } = window;
  const currentRoute = window.location;

  if (!routes.has(currentRoute)) return <Quote />;

  const route = routes.get(currentRoute);
  return <route.component />;
}