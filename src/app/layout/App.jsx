import React, { Component, Fragment } from "react";

import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, BrowserRouter } from "react-router-dom";
import PostDashboard from "../../features/posts/postsDashboard/postDashboard";
import HomePage from "../../features/home/homePage"
import PostDetailsPage from '../../features/posts/postDetails/postDetailsPage'
import PeopleDashboard from '../../features/user/peopleDashboard/peopleDashboard'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import UserDetailed from '../../features/user/Settings/userDetailed/UserDetailedPage'
import CreatePost from '../../features/posts/postForm/postForm'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
      <Route exact path='/' component ={HomePage}  />
      <Route path='/(.+)' render={()=>(  
        <Fragment>
        <NavBar />
        <Container className='main'>
          
          <Route path='/posts' component ={PostDashboard}/>
          <Route path='/posts/:id' component ={PostDetailsPage}/>
          <Route path='/people' component ={PeopleDashboard}/>
          <Route path='/profile/:id' component ={UserDetailed}/>
          <Route path='/settings' component ={SettingsDashboard}/>
          <Route path='/createPost/' component ={CreatePost}/>
         
        </Container>
      </Fragment>

      )}/>
      </Fragment>
      
    
      </BrowserRouter>
    );
  }
}
export default App;
