import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import {getPlayLists} from './actions'
import './App.css'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(
      getPlayLists({
        country: "BR",
        limit: "20",
        locale: "sv_BR",
        timeStamp: "2019-05-25T11:00:00",
        offSet: "5",
      })
    )
  }
  render(){
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    )  
  }
}

function mapStateToProps(toProps){
  return toProps
}

export default connect(mapStateToProps)(App);
