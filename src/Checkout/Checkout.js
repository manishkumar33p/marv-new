// src/Checkout/Checkout.js

import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        street: '',
        addressLine2: '',
        city: '',
        district: '',
        state: '',
        country: '',
        pincode: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
    };

    const handlePayment = () => {
        const { firstName, lastName, street, city, state, country, pincode } = address;
        if (firstName && lastName && street && city && state && country && pincode) {
            alert("Redirecting to payment gateway...");
            navigate('/paymentgateway');
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="checkout-container">
            <h1>Enter Your Details</h1>
            <div className="customer-details">
                <div className="form-group address-grid">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={address.firstName}
                            onChange={handleChange}
                            placeholder="John"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={address.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street:</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={address.street}
                        onChange={handleChange}
                        placeholder="123 Main St"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="addressLine2">Address Line 2:</label>
                    <input
                        type="text"
                        id="addressLine2"
                        name="addressLine2"
                        value={address.addressLine2}
                        onChange={handleChange}
                        placeholder="Apt, suite, etc. (optional)"
                    />
                </div>
                <div className="form-group address-grid">
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={address.city}
                            onChange={handleChange}
                            placeholder="City"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="district">District:</label>
                        <input
                            type="text"
                            id="district"
                            name="district"
                            value={address.district}
                            onChange={handleChange}
                            placeholder="District"
                        />
                    </div>
                </div>
                <div className="form-group address-grid">
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={address.state}
                            onChange={handleChange}
                            placeholder="State"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={address.country}
                            onChange={handleChange}
                            placeholder="Country"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pincode:</label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={address.pincode}
                        onChange={handleChange}
                        placeholder="123456"
                    />
                </div>
            </div>
            <button onClick={handlePayment} className="btn">Buy Now</button>
        </div>
    );
};

export default Checkout;
