import { test, expect } from '@playwright/test';

test('User Login API', async ({ request }) => {
  const response = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
      data: {
        email: 'kimi.agarwal@tothenew.com',
        password: 'Kimicutiepie1989@'
      }
    }
  );

  console.log('Status:', response.status());
  console.log(await response.text());

  expect(response.status()).toBe(200);
});