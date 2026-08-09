import { test, expect } from '@playwright/test';

test('Invalid token - API', async ({ request }) => {
  const response = await request.get(
    'https://api.practicesoftwaretesting.com/users/me',
    {
      headers: {
        Authorization: 'Bearer invalid-token'
      }
    }
  );

  expect(response.status()).toBe(401);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('message');
  expect(responseBody.message).toBe('Unauthorized');
});
