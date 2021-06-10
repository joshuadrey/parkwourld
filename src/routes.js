import react from 'react'
import Auth from './components/Auth'
import Home from './components/Home'
import Places from './components/Places'
import Tricks from './components/Tricks'
import RatingsPage from './components/RatingsPage'
import MessagesSignUp from './components/MessagesSignUp'
import SubscribersPage from './components/SubscribersPage'
import { HashRouter as Switch, Route } from 'react-router-dom'



export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/places' component={Places} />
        <Route exact path='/tricks' component={Tricks} />
        <Route exact path='/ratings' component={RatingsPage} />
        <Route exact path='/register' component={MessagesSignUp} />
        <Route exact path='/hiddenSubscribers' component={SubscribersPage} />
    </Switch>
)