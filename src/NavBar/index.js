import React from 'react';
import Logo from '../Logo'

const NavBar = ({cart, clearCart}) => {

  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0)
    return (
      <> 
      <header>
        <nav>
          <Logo />
          <div className="navbar-actions">
            <div className="total">
              <span className="quantity">
                {cart.length} {cart.length === 0 ? 'curso' : 'cursos'}
                </span>
              <span className="total">R$ {totalPrice.toFixed(2)} </span>
            </div>            
            <button className="clean-btn" onClick={() => clearCart()}>LIMPAR</button>
          </div>
        </nav>
      </header>
      </>
    )
}

export default NavBar;