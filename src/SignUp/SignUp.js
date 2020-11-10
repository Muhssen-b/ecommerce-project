import React from 'react';
import Button from '@material-ui/core/Button'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils.js';
import TextField from '@material-ui/core/TextField';
import './SignUp.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
}
handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
}

handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state

    if(password !== confirmPassword) {
        return alert('passwords dont match')

    }

    try {
        const { user } = await auth.createrUserWithEmailAndPassword(
            email,
            password
        );
        
        await createUserProfileDocument(user, {displayName });
       
        this.setState = ({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }  catch (error) {
        console.error(error);

    }

}


    
    render() {
        return (
            <div className = 'sign-up'>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit = {this.handleSubmit}>
                <TextField
                hintText="displayName"
                id="standard-basic"
                label="Display Name"
                defaultValue={this.state.displayName}
                onChange= {this.handleChange}
                className = "TextField"
                />
                <TextField
                hintText="Email"
                id="standard-basic"
                label="Email"
                defaultValue={this.state.email}
                onChange= {this.handleChange}
                className = "TextField"
                />
                <TextField
                hintText="Password"
                id="standard-basic"
                label="Password"
                defaultValue={this.state.password}
                onChange= {this.handleChange}
                className = "TextField"
                />
                <TextField
                hintText="Confirm Password"
                id="standard-basic"
                label="Confirm Password"
                defaultValue={this.state.confirmPassword}
                onChange= {this.handleChange}
                className = "TextField"
                
                />
                </form>
                <Button variant="contained" color="primary" onClick = {this.handleSubmit} style = {styles}>
                  SIGN UP
                </Button>
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


export default SignUp