import React from 'react';


import './CustomButton.scss'

const CustomButton = ({children, ...otherProps, isGoogleSignIn}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button` } 
    {...otherProps}>
        {children}
    </button>
)

export default CustomButton;