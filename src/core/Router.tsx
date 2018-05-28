import * as React from 'react';
import { Container } from 'src/ui/styles';
import { splitRouteParams } from 'src/utils/routes';
import routes from 'src/core/routes';
import NotFound from 'src/ui/views/404View';

const Router = () => {
  console.log(window.location)
  const url = window.location.pathname;
  if (!routes.has(url)) return <NotFound />;
  const route = routes.get(url);
  const loader = route.loader;

  const RouteComponent = route.component;
  const props = { loader, params: splitRouteParams(window.location.search) };

  return (
    <Container>
      <RouteComponent {...props} />
    </Container>
  )
}

export default Router;
