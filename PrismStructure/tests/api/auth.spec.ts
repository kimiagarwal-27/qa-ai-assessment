import { test, expect } from '@playwright/test';
import user from '../../test-data/user.json';
import { env } from '../../config/env';

test('User Login API', async ({ request }) => {
  const response = await request.post(user.url,
    {
        data: {
          email: env.testEmail,
          password: env.testPassword,
        },
    }
  );

  console.log('Status:', response.status());
  console.log(await response.text());

  expect(response.status()).toBe(200);
});