import { Switch, Route } from 'react-router-dom';
import { Exchange } from './Exchange'

export function WidgetPaths(props) {
  const url = props.match.url

  return (
    <Switch>
      <Route path={url} exact>
        <Exchange/>
      </Route>
      <Route
        path={`${url}/:currencyOne/:currencyTwo`}
        render={({match}) =>
          <Exchange
            pathCurrencyOne={match.params.currencyOne.toUpperCase()}
            pathCurrencyTwo={match.params.currencyTwo.toUpperCase()}
          />}
      />
    </Switch>
  )
}
