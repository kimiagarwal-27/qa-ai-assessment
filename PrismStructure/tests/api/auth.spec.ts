import { test, expect } from '@playwright/test';
import user from '../../test-data/user.json';
test('User Login API', async ({ request }) => {
  const response = await request.post(user.url,
    {
      data: {
        email: user.email,
        password: user.password
      }
    }
  );

  console.log('Status:', response.status());
  console.log(await response.text());

  expect(response.status()).toBe(200);
});