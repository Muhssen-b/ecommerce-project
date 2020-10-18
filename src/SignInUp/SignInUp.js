import React from 'react'
import {BrowserRouter as Route, Switch } from 'react-router-dom';
import SignIn from '../SignIn/SignIn'

import './SignInUp.scss'
const SignInUp = () => (
    <div className='signInUp'>
        <SignIn />
    </div>

);

export default SignInUp;