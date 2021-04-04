import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { WidgetPaths } from './WidgetPaths'

const routes = [
  {
    path: '/',
    isExact: true,
    component: (props) => <Redirect to="/widget" />,
  },
  {
    path: '/widget',
    component: WidgetPaths,
  },
]

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map(({path, component, isExact = false}) => (
          <Route
            key={path}
            path={path}
            exact={isExact}
            component={component} />
        ))}
        <Route>Page not found</Route>
      </Switch>
    </div>
  );
}

export default App;
