import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import './App.scss'
import A from './components/Page1'
import B from './components/Page2'
import C from './components/Page3'

function App(props) {
  const transitions = useTransition(props.history.location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return transitions.map(({ item, props, key }) => (
    // TURNING YOUR .App DIV INTO AN ANIMATED DIV MAKES THE MAGIC HAPPEN!
    <animated.div className="App" key={key} style={props}>
      <Switch location={item}>
        <Route path="/" exact component={A} />
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
        <Route path="/c" component={C} />
      </Switch>
    </animated.div>
  ))
}

export default withRouter(App)