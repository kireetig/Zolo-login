import React, {Component} from 'react';
import { Tab, Tabs} from 'react-bootstrap';
import Signin from './Signin.js';
import SignUp from './SignUp.js';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
          // Takes active tab from props if it is defined there
          activeTab: props.activeTab || 1
        };

        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
        
      }

     

      render() {
        return (
          <div className="Absolute-Center">
              <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect} id="Login" animation={true}>
                <Tab eventKey={1} title="Sign In" tabClassName="signin"><Signin /></Tab>
                <Tab eventKey={2} title="Zolo" disabled tabClassName="tabTitle"></Tab>
                <Tab eventKey={3} title="Sign Up" tabClassName="signup"><SignUp /></Tab>
              </Tabs>
          </div>
        );
      }

      handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
          activeTab: selectedTab
        });
      }
}

export default Login;
