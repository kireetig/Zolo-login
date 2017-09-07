import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      
        <div className="page-container12">
            <Login activeTab={1} />
        </div>
     
    );
  }
}

export default App;
