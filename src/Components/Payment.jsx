import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Replace with your actual publishable key from Stripe Dashboard
const stripePromise = loadStripe('pk_test_51QkTtJQx5Y2bGseP5rL7WlBY1F9KE1Exki1rPmDJVEhdZhMGMoZYUN0P1dJzUdadlSp3X5XbVKqB3vUqGgnwoeun00UaB5DHnQ');

const Payment = () => {

    
    return (
        <div>
            <div className="text-center py-6">
                <h2 className="text-6xl font-bold mb-3">Payment</h2>
                <p className="mb-3">Unleash your skills</p>
                <div className="divider"></div>
            </div>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
