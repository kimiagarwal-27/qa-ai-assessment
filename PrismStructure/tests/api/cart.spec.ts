import { test, expect } from '@playwright/test';
import user from '../../test-data/user.json';
test('Create Cart API', async ({ request }) => {
  // Login and get token
  const loginResponse = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
      data: {
        email: user.email,
        password: user.password
      }
    }
  );

  expect(loginResponse.status()).toBe(200);

  const loginBody = await loginResponse.json();
  const token = loginBody.access_token;

  console.log('Token:', token);

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
  console.log(cartBody);
});