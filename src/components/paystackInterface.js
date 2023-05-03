export const handlePayment = (email, amount) => {
  const handler = PaystackPop.setup({
    key: "pk_test_2b650c5188f3307ee7ada5b82b1ddd2d2f2dc786", // Replace with your public key
    email,
    amount: amount * 100,
    // label: "Optional string that replaces customer email"
    onClose: () => {
      alert("Window closed.");
    },
    callback: (response) => {
      const message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });
  handler.openIframe();
};
