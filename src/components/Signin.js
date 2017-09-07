import React, {Component} from 'react';
import {FormControl,Form, Col, FormGroup, ControlLabel,  Button} from 'react-bootstrap';
import MySmallModal from './MySmallModal.js';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {uname: '',password:'',message1:false,message2:false,smShow: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadDataFromServer = this.loadDataFromServer.bind(this);
    }

    loadDataFromServer() {
        fetch('https://prodapi.livezelo.com/v2/pgs/57d93a2f631877034ff86c27/photos.json')
        .then((resp) => {console.log(resp.json())})
        .catch(function(error){
           console.log(error);
        })
       }


    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const temp = value;
        
        this.setState({
            [name]: temp
          });

        if(name === 'uname'){
            if(value.length === 10){
                this.setState({
                    message1: false
                })
            }
            else {
                this.setState({
                    message1: true
                })
            }
        }
        else if(name === 'password'){
            if(value.length > 5){
                this.setState({
                    message2: false
                })
            }
            else {
                this.setState({
                    message2: true
                })
            }
        }
       
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.uname.length === 10 && this.state.password.length >5){
            alert('You are logged in');
            this.loadDataFromServer();
        }
        else{
            alert('Please Give Proper Login Credentials');
        }
      }
    
    render(){
        let smClose = () => this.setState({ smShow: false });
          return (
            <Form horizontal>
                <FormGroup controlId='formControlsNumber'>
                <ControlLabel>Username<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="uname"
                type="number"  placeholder="10 digit Mobile Number"
             required onBlur={this.handleChange}
                 />
                
              </FormGroup>
            
           { this.state.message1 ? <span style={{color: 'red'}}>Please Enter valid Phone number</span> : null }


           <FormGroup controlId='formControlsNumber'>
                <ControlLabel>Password<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="password"
                type="password"  placeholder="Password"
             required onBlur={this.handleChange}
                 />
              </FormGroup>
           
         { this.state.message2 ? <span style={{color: 'red'}}>Please Enter valid Password<br/></span> : null }
        
        <a onClick={()=>this.setState({ smShow: true })}>Forgot Password?</a><br /><br />
            <FormGroup>
              <Col  sm={12}>
                <Button type="submit" bsStyle="info" bsSize="large" block onClick={this.handleSubmit}>
                  Sign in
                </Button>
              </Col>
            </FormGroup>

            <MySmallModal show={this.state.smShow} onHide={smClose} />

          </Form>
          );
    }
}

export default Signin;