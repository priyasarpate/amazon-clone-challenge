const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')
('sk_test_51HxGgACQWpYDQ94rNVwp212hmVwWlKDvp18sbDefwfzokQTQADe5yS9K3ojqUsa6MaMhoZCetzFfoxHIUIlVVm5F005p12tZLG')

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


// example endpoint
//http://localhost:5001/my-app-2fc2f/us-central1/api