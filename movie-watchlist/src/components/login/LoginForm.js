import React, { Component } from "react";
import css from './login.css'
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Button,
  Alert
} from "react-bootstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      data: {
        username: "",
        password: ""
      },
      errors: {},
      global: {
        error: '',
        success: ''
      }
    };
  };

  validate = () => {
    let errors = {};
    const { username, password } = this.state.data; //Object Destructuring

    if (username === "") errors.username = "Username can't be blank.";
    if (password === "") errors.password = "Password can't be blank.";

    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      console.log(this.state.data);
      //API call for login
      const { data } = this.state;

      if(data.username === 'admin' && data.password === 'admin') {
        //redirect the user to tasks page
        this.props.history.push('/watchlist');
        this.setState(this.getInitialState()); //resetting the form
      } else {
        //show an error message
        this.setState({
          ...this.state,
          global: {
            ...this.state.global,
            error: 'Invalid username and password.'
          }
        });
      }     
    } else {
      console.log("invalid data");
      this.setState({
        errors: errors
      });
    }
  };

  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ""
      }
    });
  };

  render() {    
    const { username, password } = this.state.data;
    const { errors, global } = this.state;    
	  return (
		<div className="row justify-content-center row2  ">
		
		<div className="col-md-6 align-middle ">
		<p className="login">* Login to create your Movie Watchlist</p>
		<form className="login"  onSubmit={this.handleSubmit}>
		  <FormGroup controlId="username">
			<ControlLabel>Username</ControlLabel>
			<FormControl
			  value={username}
			  name="username"
			  onChange={this.handleChange}
			  className={errors.username ? "is-invalid" : ""}
			/>
			<HelpBlock className="invalid-feedback">{errors.username}</HelpBlock>
		  </FormGroup>
  
		  <FormGroup controlId="password">
			<ControlLabel>Password</ControlLabel>
			<FormControl
			  value={password}
			  name="password"
			  type="password"
			  onChange={this.handleChange}
			  className={errors.password ? "is-invalid" : ""}
			/>
			<HelpBlock className="invalid-feedback">{errors.password}</HelpBlock>
		  </FormGroup>
  
		  <Button type="submit" bsStyle="primary">
			Login
		  </Button>
		</form>
		
		</div>
		
		</div>
	  );
	}
  }
  
  export default LoginForm;
  