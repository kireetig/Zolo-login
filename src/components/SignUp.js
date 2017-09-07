import React, {Component} from 'react';
import {FormControl,Form, Col,  FormGroup, ControlLabel,  Button} from 'react-bootstrap';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {uname2: '',name:'',email:'',password3:'',repassword3:'',message1:false,message2:false,message3:false};

        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
    }

    handleChange3(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const temp = value;

        this.setState({
            [name]: temp
          });

        if(name === 'uname2') {
            if(value.length === 10){
                this.setState({
                    message1:false
                })
            }
            else{
                this.setState({
                    message1:true
                })
            }
        }
        else if(name === 'password3'){
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
        else if(name === 'repassword3') {
                    if(value === this.state.password3){
                        this.setState({
                            message3: false
                        })
                    }
                    else{
                     this.setState({
                         message3: true
                     })
                    }
                   }
    }

    handleSubmit3(event) {
       event.preventDefault();
       
       if(this.state.uname2.length === 10 && this.state.name.length>2 && this.state.email.length>4 && this.state.password3.length > 5 && this.state.password3 === this.state.repassword3 ){
           alert('You have Successfully Signed Up');
       }
       else{
        console.log(this.state);
           alert('Please provide Proper Credentials');
       }
    }

    render(){
        return (
            <Form horizontal>
                <FormGroup controlId='formControlsNumber'>
                <ControlLabel>Mobile Number/Username<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="uname2"
                type="number"  placeholder="10 digit Mobile Number"
             required onBlur={this.handleChange3} />
              </FormGroup>
              { this.state.message1 ? <span style={{color: 'red'}}>Please Enter valid Phone number</span> : null }

              <FormGroup controlId='formControlsText'>
                <ControlLabel>Name <span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="name"
                type="text"  placeholder="Name"
             required onBlur={this.handleChange3} />
             </FormGroup>

             <FormGroup controlId='formControlsEmail'>
                <ControlLabel>Email<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="email"
                type="email"  placeholder="Email"
             required onBlur={this.handleChange3} />
              </FormGroup>
              

              <FormGroup controlId='formControlsPassword'>
                <ControlLabel>Password<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="password3"
                type="password"  placeholder="Password"
             required onBlur={this.handleChange3} />
              </FormGroup>
              { this.state.message2 ? <span style={{color: 'red'}}>Please Enter valid Phone number</span> : null }

              <FormGroup controlId='formControlsPassword'>
                <ControlLabel>Confirm Password<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="repassword3"
                type="password"  placeholder="Password"
             required onBlur={this.handleChange3} />
              </FormGroup>
              { this.state.message3 ? <span style={{color: 'red'}}>Passwords didn't Match</span> : null }
                <br/>
              <FormGroup>
              <Col  sm={12}>
                <Button type="submit" bsStyle="info" bsSize="large" block onClick={this.handleSubmit3}>
                  Sign Up
                </Button>
              </Col>
            </FormGroup>
            </Form>
        )
    }
}

export default SignUp; 