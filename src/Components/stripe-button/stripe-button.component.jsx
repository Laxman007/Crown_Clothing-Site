import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=100*price;
    const publishableKey='pk_test_nBLIQXlP5b7f7yRBXq9OBEpM00c2t8wGhi';

    const onToken=token=>{
        console.log(token);
        alert('Payment Successfull');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Ltd..'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken} 
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;