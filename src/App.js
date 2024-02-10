import {Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'

import MovieDetails from './components/MovieDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/movie/:id" component={MovieDetails} />
  </Switch>
)

export default App
