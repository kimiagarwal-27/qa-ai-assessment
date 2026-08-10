import { test, expect } from '@playwright/test';
import user from '../../test-data/user.json';
import { env } from '../../config/env';



test('Generate Invoice API', async ({ request }) => {
  // Login
  const loginResponse = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
    data: {
      email: env.testEmail,
      password: env.testPassword,
    },
    }
  );

  expect(loginResponse.status()).toBe(200);

  const loginBody = await loginResponse.json();
  const token = loginBody.access_token;

  // Create Cart
  const cartResponse = await request.post(
    'https://api.practicesoftwaretesting.com/carts',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  expect(cartResponse.status()).toBe(201);

  const cartBody = await cartResponse.json();
  const cartId = cartBody.id;

  console.log('Cart ID:', cartId);

  // Generate Invoice
  const invoiceResponse = await request.post(
    `https://api.practicesoftwaretesting.com/invoices`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        cart_id: cartId,
        payment_method: "credit-card", // We'll verify this value next
        payment_details: {
          credit_card_number: "4111-1111-1111-1111",
          expiration_date: "12/2030",
          cvv: "123",
          card_holder_name: "kimi"
        },
        billing_street: "221 Baker Street",
        billing_city: "London",
        billing_country: "United Kingdom"
      }
    }
  );

  console.log('Invoice Status:', invoiceResponse.status());
  console.log(await invoiceResponse.text());

  expect(invoiceResponse.status()).toBe(201);
});