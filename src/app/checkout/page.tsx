// "use client";

// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import error from "next/error";

// export default function Home() {
//   const [amount, setAmount] = useState(2000);
//   const [success, setSuccess] = useState(false);

//   const handleCheckout = async () => {
//     const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");
//     const stripe = await stripePromise;

//     const session = await fetch("/create-checkout-session", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         amount: amount,
//         currency: "usd",
//         customer_email: "customer@example.com",
//       }),
//     }).then((res) => res.json());

//     if (stripe) {
//       const { error } = await stripe.redirectToCheckout({
//         sessionId: session.id,
//       });

//       if (error) {
//         console.error("Error redirecting to checkout:", error);
//       }
//     } else {
//       console.error("Stripe failed to load.");
//     }

//     if (error) {
//       console.error("Error redirecting to checkout:", error);
//     }
//   };

//   return (
//     <div>
//       {!success ? (
//         <button onClick={handleCheckout}>Checkout</button>
//       ) : (
//         <p>Payment successful!</p>
//       )}
//     </div>
//   );
// }
