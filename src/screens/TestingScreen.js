/* eslint-disable no-unused-vars */
import Axios from "axios";
import React, { useEffect, useState } from "react";

function TestingScreen() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    const { data } = await Axios.get("/api/testorder/list-orders");
    setOrders(data);
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  function loadRazorpay() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await Axios.post("/api/testorder/create-order", {
          amount: orderAmount + "00",
        });
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await Axios.get("/api/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "example name",
          description: "example transaction",
          order_id: order_id,
          handler: async function (response) {
            const result = await Axios.post("/api/testorder/pay-order", {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            alert(result.data.msg);
            fetchOrders();
          },
          prefill: {
            name: "example name",
            email: "email@example.com",
            contact: "111111",
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#80c0f0",
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

  return (
    <div className="App">
      <h1> Razorpay Example: Node & React</h1>
      <hr />
      <div>
        <h2> Pay Order</h2>
        <label>
          Amount:{" "}
          <input
            placeholder="INR"
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
          ></input>
        </label>

        <button disabled={loading} onClick={loadRazorpay}>
          Razorpay
        </button>
        {loading && <div>Loading...</div>}
      </div>
      <div className="list-orders">
        <h2>List Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>AMOUNT</th>
              <th>ISPAID</th>
              <th>RAZORPAY</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((x) => (
              <tr key={x._id}>
                <td>{x._id}</td>
                <td>{x.amount / 100}</td>
                <td>{x.isPaid ? "YES" : "NO"}</td>
                <td>{x.razorpay.paymentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestingScreen;
