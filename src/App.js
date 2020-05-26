import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import NewPro from './components/pro/NewPro'
import ClubForm from './components/clubs/ClubForm'
import ProsContainer from './components/pro/ProsContainer'
import Home from './components/home/Home'


import { connect } from 'react-redux'
import { fetchPros } from './actions/Pros.js'

class App extends Component {

  componentDidMount() {
    this.props.fetchPros()
  }
  
  render() {

    return (
      <div> 
        <Nav/>
          <Switch> 
            <Route exact path="/" component={Home}/> 
            <Route exact path="/pros" component={ProsContainer}/>
            <Route exact path="/pro/new" component={NewPro}/>
            <Route exact path="/pro/:id/club/new" component={ClubForm}/>
          </Switch>
      </div>
    );
}

}

export default connect(null, { fetchPros })(App);
