import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Login/LoginScreen';
import CreateUser from './CreateUser/CreateUser';
import Profile from './Profile/Profile';
import Diary from './DiaryRecord/Diary';
import Menu from './Menu/Menu';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />     

      <Route exact path='/create-user' component={CreateUser} />

      <Route exact path="/profile" component={Profile} />

      <Route exact path="/diary" component={Diary} />

      <Route exact path='/menu' component={Menu} />
    
    </Switch>
  </BrowserRouter>
)

export default Routes;