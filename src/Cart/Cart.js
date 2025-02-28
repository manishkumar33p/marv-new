// // import React, { useState, useEffect } from 'react';

// // const Cart = () => {
// //   const [cartItems, setCartItems] = useState([]);

// //   // Load cart items from localStorage
// //   useEffect(() => {
// //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
// //     setCartItems(cart);
// //   }, []);

// //   // Calculate total price
// //   const total = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

// //   return (
// //     <div className="cart">
// //       <h2>Your Cart</h2>
// //       {cartItems.length === 0 ? (
// //         <p>Your cart is empty</p>
// //       ) : (
// //         <div>
// //           {cartItems.map((item, index) => (
// //             <div key={index} className="cart-item">
// //               <h4>{item.name}</h4>
// //               <p>Price: {item.price}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //       <div className="total">
// //         <h4>Total: ${total}</h4>
// //         <button>Checkout</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import "D:/marv/src/Shop/Cart.css"

// const Cart = () => {
//   const [cart, setCart] = useState([]);
  
//   // Get cart from local storage (if any)
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div>{item.name} - {item.price}</div>
//                 <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <button className="checkout-btn">Proceed to Checkout</button>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;


// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import "D:/marv/src/Shop/Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const history = useHistory();

//   // Get cart from local storage (if any)
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//     calculateTotal(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     calculateTotal(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   // Function to calculate the total price of all products in the cart
//   const calculateTotal = (cartItems) => {
//     const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
//     setTotal(totalPrice.toFixed(2));
//   };

//   // Proceed to Checkout (can be extended to a payment page)
//   const proceedToCheckout = () => {
//     // Logic for checkout (can be redirect to checkout page)
//     alert("Proceeding to checkout...");
//     history.push("/checkout"); // Redirect to checkout page (you need to set this page up)
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <ul className="cart-item-list">
//             {cart.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.price}</p>
//                 </div>
//                 <button className="remove-item-btn" onClick={() => removeItemFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-summary">
//             <h3>Total: ${total}</h3>
//             <button className="checkout-btn" onClick={proceedToCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate in place of useHistory
// import './Cart.css';  // Import the CSS correctly

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate(); // Initialize navigate

//   // Get cart from local storage (if any)
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//     calculateTotal(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     calculateTotal(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   // Function to calculate the total price of all products in the cart
//   const calculateTotal = (cartItems) => {
//     const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
//     setTotal(totalPrice.toFixed(2));
//   };

//   // Proceed to Checkout (can be extended to a payment page)
//   const proceedToCheckout = () => {
//     // Logic for checkout (can be redirect to checkout page)
//     alert("Proceeding to checkout...");
//     navigate("/checkout"); // Use navigate instead of history.push for redirection
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <ul className="cart-item-list">
//             {cart.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.price}</p>
//                 </div>
//                 <button className="remove-item-btn" onClick={() => removeItemFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-summary">
//             <h3>Total: ${total}</h3>
//             <button className="checkout-btn" onClick={proceedToCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;





// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import './Cart.css';  // Import CSS

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate();

//   // Load cart from localStorage
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//     calculateTotal(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     calculateTotal(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   // Function to calculate the total price of all products in the cart
//   const calculateTotal = (cartItems) => {
//     const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
//     setTotal(totalPrice.toFixed(2)); // Set the total price
//   };

//   // Proceed to Checkout
//   const proceedToCheckout = () => {
//     navigate("/checkout"); // Redirect to checkout page
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <ul className="cart-item-list">
//             {cart.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.price}</p>
//                 </div>
//                 <button className="remove-item-btn" onClick={() => removeItemFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-summary">
//             <h3>Total: ${total}</h3>
//             <button className="checkout-btn" onClick={proceedToCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';  // Import CSS
import NavBar from '../Navbar/Navbar';
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
    calculateTotal(cartItems);
  }, []);

  // Function to remove item from the cart
  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
  };

  // Function to calculate the total price of all products in the cart
  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
    setTotal(totalPrice.toFixed(2)); // Set the total price
  };

  // Proceed to Checkout
  const proceedToCheckout = () => {
    navigate("/checkout"); // Redirect to checkout page
  };

  return (
    <div className="cart-container">
            <NavBar />
      <h2> Your Cart</h2>
      {cart.length > 0 ? (
        <div className="cart-box">
          <ul className="cart-item-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <button className="remove-item-btn" onClick={() => removeItemFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Total: ${total}</h3>
            <button className="checkout-btn" onClick={proceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
