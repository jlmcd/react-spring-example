import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import './App.scss'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

function App(props) {
  const transitions = useTransition(
    props.history.location,
    location => location.pathname,
    {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
    }
  )
  return (
    // Make sure you give .App absolute positioning for this to work!
    <div className="App">
      {transitions.map(({ item, props, key }) => (
        <animated.div className="App" key={key} style={props}>
          <Switch location={item}>
            <Route path="/" exact component={Page1} />
            <Route path="/2" component={Page2} />
            <Route path="/3" component={Page3} />
            <Route path="/4" component={Page4} />
          </Switch>
        </animated.div>
      ))}
    </div>
  )
}

export default withRouter(App)
