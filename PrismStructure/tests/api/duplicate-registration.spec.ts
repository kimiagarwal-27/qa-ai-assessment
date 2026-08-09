import { test, expect } from '@playwright/test';

test('Duplicate registration - API', async ({ request }) => {
  const user = {
    first_name: 'Test',
    last_name: 'User',
    email: 'duplicate-test@example.com',
    password: 'Password123!'
  };

  const response = await request.post(
    'https://api.practicesoftwaretesting.com/users/register',
    {
      data: user
    }
  );

  console.log('Status:', response.status());
  console.log('Response:', await response.text());

  expect(response.status()).toBe(422);
});
