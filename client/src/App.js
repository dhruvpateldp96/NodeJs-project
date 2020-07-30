import React, {useEffect,createContext, useReducer, useContext} from 'react';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import {Home,Signin,Profile,Signup,CreatePost,UserProfile} from './components/screens'
// import {  } from 'react';
import { reducer, initialState } from './reducers'
// import  initialState  from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type:"USER", payload:user})
    }else{
      history.push('/signin')
    }
  }, [])

  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/signup'>
        <Signup/>
      </Route>

      <Route path='/signin'>
        <Signin/>
      </Route>

      <Route exact path='/profile'>
        <Profile/>
      </Route>

      <Route path='/create'>
        <CreatePost/>
      </Route>

      <Route path='/profile/:userid'>
        <UserProfile/>
      </Route>
    </Switch>

  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>   
        <NavBar />
        <Routing/>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
