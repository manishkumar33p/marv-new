import React, { useState } from 'react';
import './PaymentGateway.css';
import phonepay from '../phonepay.png';
import paytm from '../paytm.jfif';
import googlepay from '../googlepay.jfif';
import bhim from '../bhim.png';

const PaymentGateway = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiry: '',
        cvv: '',
        cardHolderName: '',
    });
    const [cardType, setCardType] = useState('');
    const [upiMethod, setUpiMethod] = useState('');

    const detectCardType = (number) => {
        if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) return 'Visa';
        if (/^5[1-5][0-9]{14}$/.test(number)) return 'MasterCard';
        if (/^(60|61|62|64|65)[0-9]{14,16}$/.test(number)) return 'RuPay';
        return '';
    };

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'cardNumber') {
            setCardType(detectCardType(value));
        }
    };

    const handlePayment = () => {
        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        if (paymentMethod === 'Credit/Debit Card') {
            const { cardNumber, expiry, cvv, cardHolderName } = cardDetails;
            if (!cardNumber || !expiry || !cvv || !cardHolderName) {
                alert('Please fill in all card details.');
                return;
            }
        } else if (paymentMethod === 'UPI' && !upiMethod) {
            alert('Please select a UPI app.');
            return;
        }

        alert(`Proceeding with ${paymentMethod} payment...`);
    };

    return (
        <div className="payment-gateway-container">
            <h1>Payment Gateway</h1>
            <h2>Select Your Payment Method</h2>
            <div className="payment-options">
                <div className="payment-methods">
                    {['Credit/Debit Card', 'UPI', 'Net Banking', 'Wallet'].map((method) => (
                        <div key={method} className="payment-option">
                            <input
                                type="radio"
                                id={method}
                                name="paymentMethod"
                                value={method}
                                onChange={() => {
                                    setPaymentMethod(method);
                                    setUpiMethod(''); // Reset UPI method when changing payment type
                                }}
                            />
                            <label htmlFor={method}>{method}</label>
                        </div>
                    ))}
                </div>

                <div className="additional-inputs">
                    {paymentMethod === 'Credit/Debit Card' && (
                        <div className="card-details">
                            <h3>Enter Card Details</h3>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={cardDetails.cardNumber}
                                onChange={handleCardInputChange}
                                maxLength="16"
                            />
                            <p>Card Type: {cardType || 'Unknown'}</p>
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                value={cardDetails.expiry}
                                onChange={handleCardInputChange}
                                maxLength="5"
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={cardDetails.cvv}
                                onChange={handleCardInputChange}
                                maxLength="3"
                            />
                            <input
                                type="text"
                                name="cardHolderName"
                                placeholder="Cardholder Name"
                                value={cardDetails.cardHolderName}
                                onChange={handleCardInputChange}
                            />
                        </div>
                    )}

                    {paymentMethod === 'UPI' && (
                        <div className="upi-options">
                            <h3>Select UPI App</h3>
                            {['PhonePe', 'Paytm', 'Google Pay', 'BHIM UPI'].map((method) => (
                                <div key={method} className="upi-option">
                                    <input
                                        type="radio"
                                        id={method}
                                        name="upiMethod"
                                        value={method}
                                        onChange={() => setUpiMethod(method)}
                                    />
                                    <label htmlFor={method}>
                                        <img src={method === 'PhonePe' ? phonepay : method === 'Paytm' ? paytm : method === 'Google Pay' ? googlepay : bhim} alt={method} className="upi-icon" />
                                        {method}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <button onClick={handlePayment} className="btn">Proceed to Pay</button>
        </div>
    );
};

export default PaymentGateway;
