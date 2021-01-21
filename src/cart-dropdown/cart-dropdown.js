import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'> 
        {
            cartItems.map(cartItem => (
                <CartItem key = {cartItem.id} item = {cartItem} />
                ))}
        
        
        </div>
        
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

  const mapStateToProps = ({ cart: {cartItems } }) => ({
      cartItems
  })

export default connect(mapStateToProps)(CartDropDown);
