import react from 'react'
import Auth from './components/Auth'
import Home from './components/Home'
import Places from './components/Places'
import { HashRouter as Switch, Route } from 'react-router-dom'


export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/places' component={Places} />
    </Switch>
)