import React, {Component} from 'react';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';

class MySmallModal extends Component {

    constructor(props){
        super(props);
        this.state = {uname1: '',password1:'',repassword:'',message3:false,message4:false,message5:'',otp:''};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange1(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const temp = value;
        
        this.setState({
            [name]: temp
          });
       if(name === 'uname1'){
        if(value.length === 10){
            this.setState({
                message3: false
            })
        }
        else {
            this.setState({
                message3: true
            })
        }
       }
       else if(name === 'password1'){
           if(value.length<6){
               this.setState({
                   message4: true
               })
           }
           else{
            this.setState({
                message4: false
            })
           }
       }
       else if(name === 'repassword'){

        if(value === this.state.password1){
            this.setState({
                message5: false
            })
        }
        else{
         this.setState({
             message5: true
         })
        }
       }
        
    }

    resetForm(event){
        this.setState({
            uname1: '',password1:'',repassword:'',message3:false,message4:false,message5:'',otp:''
        })
        event.preventDefault();
    }

    handleSubmit1(event) {
        alert('A name was submitted: ' + this.state.uname1);
        event.preventDefault();
      }

    render() {
         
      return (
        <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
          <Modal.Header closeButton onClick={this.resetForm}>
            <Modal.Title id="contained-modal-title-sm">Forgot Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form horizontal>
                <FormGroup controlId='formControlsNumber'>
                <ControlLabel>Username<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="uname1"
                type="number"  placeholder="10 digit Mobile Number"
             required onBlur={this.handleChange1}
                 />
              </FormGroup>
              { this.state.message3 ? <span style={{color: 'red'}}>Please Enter valid Phone number</span> : null }
              <FormGroup>
              <Col  sm={12}>
                <Button type="submit" bsStyle="info" bsSize="large" block onClick={this.handleSubmit1}>
                  Get OTP
                </Button>
              </Col>
            </FormGroup>
          </Form>

          <Form>
          <FormGroup controlId='formControlsNumber'>
                <ControlLabel>New Password<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="password1"
                type="password"  placeholder="New Password"
             required onBlur={this.handleChange1}
                 />
              </FormGroup>
              { this.state.message4 ? <span style={{color: 'red'}}>Please Enter alteast 5 characters</span> : null }
              <FormGroup controlId='formControlsNumber'>
                <ControlLabel>Confirm Password<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="repassword"
                type="password"  placeholder="Confirm Password"
             required onBlur={this.handleChange1}
                 />
              </FormGroup>
              { this.state.message5 ? <span style={{color: 'red'}}>Passwords are not match.</span> : null }
              <FormGroup controlId='formControlsNumber'>
                <ControlLabel>OTP<span style={{color: 'red'}}>*</span></ControlLabel>
                <FormControl name="otp"
                type="text"  placeholder="OTP"
             required onBlur={this.handleChange1}
                 />
              </FormGroup>
              
              <FormGroup>
              <Col  sm={12}>
                <Button type="submit" bsStyle="info" bsSize="large" block onClick={this.handleSubmit1}>
                  Change Password
                </Button>
              </Col>
              </FormGroup>
              
          </Form>

          </Modal.Body>
          <Modal.Footer>
          
        </Modal.Footer>
        </Modal>
      );
    }
  }

  export default MySmallModal; 