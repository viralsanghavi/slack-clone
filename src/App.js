import React, { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Chat } from './Chat';
import LoginPage from './LoginPage';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }] = useStateValue()
  console.log(user)

  return (
    <div className="app">
      <Router >
        {/* for local Storage */}
        {/* JSON.parse(localStorage.getItem('name')) === null && ! */}

        {!user ?
          <LoginPage />
          :
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <h1>Hi</h1>
                </Route>
              </Switch>
            </div>
          </>
        }
      </Router>
    </div>

  );
}

export default App;
