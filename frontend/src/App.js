import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

import UserList from './components/UserList';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ProjectsList from "./components/ProjectsList"
import TODOList from "./components/TODOList"
import ProjectUsers from "./components/ProjectUsers"
import ProjectTODOs from "./components/ProjectTODOs"
import UserTODO from "./components/UserTODO"
import {HashRouter, BrowserRouter, Switch, Route, Link} from "react-router-dom";
import NotFound404 from './components/NotFound404';
import LoginForm from './components/Auth';
import ProjectForm from './components/ProjectForm';
import TODOForm from './components/TODOForm';
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {'users': [],'projects':[],'todos':[], 'token':''}
  }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({'token': token}, ()=>this.load_data())
  }
    
  get_token(login,password){    
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username: login,
      password: password})
      .then(response => {
        this.set_token(response.data['token'])
      }).catch(error => alert('Неверный логин или пароль'))
  }

  logout() {
    this.set_token('')
  }

  is_authenticated() {
    return this.state.token != ''
  }
  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated())
    {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }
  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({'token': token}, ()=>this.load_data())
  }

  createTODO(project, text, author) {

    const headers = this.get_headers()
    axios.post(`http://127.0.0.1:8000/api/projects/`, {'project': project, 'text': text, 'author': author} , {headers})
    .then(response => {
        this.loadData();
    })
    .catch(error => {
        console.log(error)
    })
}

deleteTODO(id) {

const headers = this.get_headers()
axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`, {headers})
.then(response => {
    this.setState( {
        'todos': this.state.todos.filter((todo) => todo.id != id)
    })
})
.catch(error => {
    console.log(error)
})
}

createProject(title, authors) {

    const headers = this.get_headers()
    axios.post(`http://127.0.0.1:8000/api/projects/`, {'name': title, 'authors': authors} , {headers})
    .then(response => {
        this.loadData();
    })
    .catch(error => {
        console.log(error)
    })
}

deleteProject(id) {

  const headers = this.getHeaders()
  axios.delete(`http://127.0.0.1:8000/api/projects/${id}/`, {headers})
  .then(response => {
      this.setState( {
          'projects': this.state.projects.filter((project) => project.id != id)
      })
  })
  .catch(error => {
      console.log(error)
  })
}

  load_data() {
    const headers = this.get_headers()
      axios.get('http://127.0.0.1:8000/api/user/',{headers}).then(response => {
          this.setState(
              {
              'users': response.data.results
          })
      }).catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/projects/',{headers}).then(response => {
          this.setState(
              {
              'projects': response.data.results
          })
      }).catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/todos/',{headers}).then(response => {
          this.setState(
              {
              'todos': response.data.results
          })
      }).catch(error => console.log(error))
    }
    

  componentDidMount() {
    this.get_token_from_storage()
    this.load_data()   

  }

  

  render() {
    return(
        <div className="container">
            
            <BrowserRouter>
            <div>
            
    {this.is_authenticated() ? <button
onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}        
<Menu/>
          
            <Switch>
              <Route exact path='/' component={()=> <UserList users={this.state.users}/>}/>
              <Route exact path='/todos' component={() => <TODOList todos = {this.state.todos} deleteTODO={(id) => this.deleteTODO(id)}/>} />
              <Route path='/todos/create' exact component={() => <TODOForm todos = {this.state.project} createTODO={(project, text, author) => this.createProject(project, text, author)}/>}/>
              <Route  exact path='/projects' component={()=> <ProjectsList projects={this.state.projects} deleteProject={(id) => this.deleteProject(id)}/>}/>
              <Route path='/projects/create' exact component={() => <ProjectForm authors = {this.state.authors} createProject={(name, authors) => this.createProject(name, authors)}/>}/>
              <Route path='/project/:id' component={() => <ProjectUsers users = {this.state.users}/>} />
              <Route path='/project/:id' component={() => <ProjectTODOs todos = {this.state.todos}/>} />
              <Route path='/user/:id' component={() => <UserTODO todos = {this.state.todos}/>} /> 
              <Route exact path='/login' component={()=> <LoginForm get_token={(login,password)=>this.get_token(login,password)}/>}/>          
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