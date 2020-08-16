import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import Navbar from './Navbar';
import StartingPage from './components/StartingPage';
import Login from './components/Login';
import Schedule from './components/Schedule';
import Card from './components/Card';
import Meeting from './components/Meeting';
import List from './components/List';
import Join from './components/Join';
import Reset from './components/Reset';
import './Apps.css';
import CreateAccount from './components/CreateAccount';
import UpdatePassword from './components/UpdatePassword';
// import MeetingWindow from './components/MeetingWindow';
import InstaMeeting from './components/InstaMeeting';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={StartingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/createaccount' component={CreateAccount} />
        <Route exact path='/forgetpass' component={ForgetPassword} />
        <Route exact path='/reset' component={Reset} />
        <Route exact path='/updatepassword' component={UpdatePassword} />
        <Route exact path='/card' component={Card} />
        <Route exact path='/list' component={List} />
        <Route exact path='/instameeting' component={InstaMeeting} />
        <Route exact path='/join' component={Join} />
        <Route exact path='/meeting' component={Meeting} />
        <Route exact path='/schedule' component={Schedule} />
        {/* <Route exact path='/meetingwindow' component={MeetingWindow} /> */}
      </Switch>
    </>
  );
};

export default App;
