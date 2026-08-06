import { test, expect } from '@playwright/test';

test('User Login API', async ({ request }) => {

  const response = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
      data: {
        email: 'customer@practicesoftwaretesting.com',
        password: 'welcome01'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body.access_token);
});