import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

import UserList from './components/UserList';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ProjectsList from "./components/ProjectsList"
import TODOList from "./components/TODOList"
import {HashRouter, BrowserRouter, Switch, Route, Link} from "react-router-dom";
import NotFound404 from './components/NotFound404';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {'users': [],'projects':[],'todos':[]}
  }

  componentDidMount() {
      
    axios.get('http://127.0.0.1:8000/api/user/').then(response => {
        this.setState(
            {
             'users': response.data.results
        })
    }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
        this.setState(
            {
             'projects': response.data.results
        })
    }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/todos/').then(response => {
        this.setState(
            {
             'todos': response.data.results
        })
    }).catch(error => console.log(error))

  }

  render() {
    return(
        <div className="container">
            
            <BrowserRouter>
            <div>
            
            
<Menu/>
          
            <Switch>
              <Route exact path='/' component={()=> <UserList users={this.state.users}/>}/>
              <Route exact path='/todos' component={() => <TODOList todos = {this.state.todos}/>} />
              <Route  exact path='/projects' component={()=> <ProjectsList projects={this.state.projects}/>}/>
              <Route component={NotFound404}/>
            </Switch>
             </div>          
            </BrowserRouter>
            
            <Footer footer/>
        </div>
    )
  }
}

export default App;