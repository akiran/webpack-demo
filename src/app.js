import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link } from 'react-router'
import './app.css'

function getSuccess(nextState, callback){
  require.ensure([], (require) => {
    callback(null, require('./pages/success').default)
  });
}
function getWarning(nextState, callback){
  require.ensure([], (require) => {
    callback(null, require('./pages/warning').default)
  });
}
function getError(nextState, callback){
  require.ensure([], (require) => {
    callback(null, require('./pages/error').default)
  });
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li><Link to='success'>Success</Link></li>
            <li><Link to='warning'>Warning</Link></li>
            <li><Link to='error'>Error</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/success' getComponent={getSuccess} />
      <Route path='/warning' getComponent={getWarning} />
      <Route path='/error' getComponent={getError} />
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))
