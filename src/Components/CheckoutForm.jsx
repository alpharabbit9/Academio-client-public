import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

import useAxiosPublic from "../Hooks/useAxiosPublic";

const CheckoutForm = () => {
     

    const [error, setError] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosPublic();

    // console.log(price)

    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("Payment Error", error);
            setError(error.message);
        } else {
            console.log("Payment Method", paymentMethod);
            setError("");
        }
    };

    return (
        <div className="w-8/12 py-20 mx-auto">
            <h2 className="text-xl font-bold mb-4">Pay</h2> {/* Display the price */}
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button className="btn btn-primary my-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-700">{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;
