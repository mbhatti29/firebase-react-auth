import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'

const Signup = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
)
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {...INITIAL_STATE}
  }

  onSubmit = event => {
  
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
  
    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';


    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input 
            name ="username"
            value ={username}
            onChange={this.onChange}
            type='text'
            placeholder='Full Name'
          />
        </div>
        <div>
          <input 
            name ="email"
            value ={email}
            onChange={this.onChange}
            type='text'
            placeholder='Email Address'
          />
        </div>
        <input 
          name ="passwordOne"
          value ={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <input 
          name ="passwordTwo"
          value ={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{Error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)

export default Signup;

export { SignUpForm, SignUpLink }