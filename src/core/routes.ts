import { Map, fromJS } from 'immutable';
import Trivia from 'src/ui/views/TriviaView';
import Create from 'src/ui/views/CreateView';
import About from 'src/ui/views/AboutView';
import { loadTrivia } from './effects';

type Route = {
  loader?: (any) => Promise<any>;
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
    loader: loadTrivia,
  },
  '/trivia': {
    component: Trivia,
    loader: loadTrivia,
  },
});

export default routes;
