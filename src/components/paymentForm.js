import React, { useState } from "react";
import { handlePayment } from "./paystackInterface";

function PaymentForm() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(email, amount);
    const floatAmt = parseFloat(amount);
    handlePayment(email, floatAmt);
  };

  return (
    <div className="container is-fluid">
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1 className="title">Paystack Form</h1>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                value={email}
                required
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input is-rounded"
                type="email"
                placeholder="Enter Amount"
              />
            </div>
            {/* <p class="help is-danger">This email is invalid</p> */}
          </div>

          <div className="field">
            <label className="label">Amount</label>
            <div className="control has-icons-left has-icons-right">
              <input
                value={amount}
                min={100}
                step={10}
                id="amount"
                required
                onChange={(e) => setAmount(e.target.value)}
                className="input is-rounded"
                type="number"
                placeholder="Enter password"
              />
            </div>
            {/* <p class="help is-danger">This email is invalid</p> */}
          </div>

          {/* <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" /> I agree to the{" "}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div> */}

          <br />
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-dark">Proceed</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
