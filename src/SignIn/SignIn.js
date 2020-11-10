import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

import { auth, signInWithGoogle } from '../firebase/firebase.utils.js';

import './SignIn.scss'


class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '' , password: ''});
        } catch(error) {
            console.log(error);
        }
        this.setState({ email: '', password : ''})
    
    }

    handleChange = (event) => {
        const { value, name} = event.target.value
        
        this.setState({ [name] : value})
    }
    render() {
        return(
            <div className='sign-in'>
                <h2>Already have an account ?</h2>
                <span>Sign in with your email and password</span>
            <form onSubmit = {this.handleSubmit}>
            <div className="textFields">
            <TextField
            hintText="Email"
            id="standard-basic"
            label="Email"
            defaultValue={this.state.email}
            onChange= {this.handleChange}
            />
            <TextField
            hintText="password"
            id="standard-basic"
            label="Password"
            defaultValue={this.state.password}
            onChange={this.handleChange}
            className="textField2"
            />
        
            </div>
            </form>

            <div className="buttons">
            <Button variant="contained" color="primary" onClick = {this.handleSubmit}>
                  Submit
            </Button>
            <Button variant="contained" style={styles} onClick = {signInWithGoogle}>
              Google Sign in    
            </Button>
            </div>
            </div>

        )
    }
}

const styles = {
        
    backgroundColor: '#4285f4',
    border: 'none',
    color: 'white',
    marginLeft: '8%',
}



export default SignIn