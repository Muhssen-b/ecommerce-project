import React from 'react';
import Button from '@material-ui/core/Button'
import './cart-dropdown.scss'

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <Button variant="contained" color="primary"  style = {styles}>
                  GO TO CHECKOUT
        </Button>
    </div>
)
const styles = {
        
    backgroundColor: 'black',
    border: 'none',
    color: 'white',
    marginLeft: '8%',
  }

export default CartDropDown
