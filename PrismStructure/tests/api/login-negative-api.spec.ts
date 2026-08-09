import { test, expect } from '@playwright/test';

test('Missing credentials - Login API', async ({ request }) => {
  const response = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
      data: {}
    }
  );

  expect(response.status()).toBe(401);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('error');
  expect(responseBody.error).toBe('Invalid login request');
});

test('Missing email - Login API', async ({ request }) => {
  const response = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
      data: {
        password: 'validPassword'
      }
    }
  );

  expect(response.status()).toBe(401);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('error');
});

test('Missing password - Login API', async ({ request }) => {
  const response = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
      data: {
        email: 'test@example.com'
      }
    }
  );

  expect(response.status()).toBe(401);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('error');
});
