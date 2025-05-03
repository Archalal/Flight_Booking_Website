import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalCheckout({ amount, onSuccess }) {
  const total = sessionStorage.getItem("total");
  const totalAmount = parseFloat(total);

  if (isNaN(totalAmount) || totalAmount <= 0) {
    console.error("Invalid total amount", total);
    return <div>Error: Invalid total amount</div>;
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AahG3jHUyAwjF71y8LhJFxQiN4yBoqmSIPgBHGkYhhEtMAtB1oYi7WS16fSyaZDYLHc2RSB4lHJ8T-pZ", // Your actual sandbox client ID here
        "currency": "USD",
        "debug": true,
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount.toString(),
                  currency_code: "USD",
                },
                description: "Flight Booking",
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("Payment successful!", details);
            if (onSuccess) {
              onSuccess(details);
            }
          });
        }}
        onError={(err) => {
          console.error("Payment Error: ", err);
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalCheckout;
