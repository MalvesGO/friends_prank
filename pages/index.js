import React, {useState} from 'react';
import CardItems from '../src/CardItems';
import Courses from '../src/Courses';
import Navbar from '../src/NavBar'

import Zoom  from 'react-reveal/Fade';
import Fade  from 'react-reveal/Fade';

// https://www.youtube.com/watch?v=jo-IV8i5Gdk&list=PLeBknJ2kuv1mDABV2N-H2tcu1vbfffRvg&index=15

const ShopingCart = () => {

  const [cart, setCart] = useState([])

  function handleAddItemToCart(url, name, price){
    const itemObject = { url, name, price }
    setCart([...cart,itemObject])
  }

  function handleRemoveItemToCart(clickedItemIndex){
    const filteredCart = cart.filter(cartItem => cart.indexOf(cartItem) != clickedItemIndex)
    setCart(filteredCart)
  }

  function clearCart(){
    setCart([])
  }

    return (
      <> 

        <div className="notice">
        <Fade >
          <h1>I have a message for you...</h1>
        </Fade>
        </div>
        

        <Zoom delay={1500} >
          <img className="cat" src="https://www.react-reveal.com/assets/black-cat4.jpg" />
        </Zoom>

        <div className="notice2">
        <Fade delay={3000}>
          <h1>Antônio Reis will call you shortly</h1>
        </Fade>
        </div>

        <div className="notice3">
          <Fade delay={5000}>
            <h1>The message was given </h1>
          </Fade>
        </div>

        
      {/* <Navbar cart={cart} clearCart={clearCart} />
      <Courses handleAddItemToCart={handleAddItemToCart} />
      <CardItems cart={cart} handleRemoveItemToCart={handleRemoveItemToCart} />       */}
      </>
    )
}

export default ShopingCart;