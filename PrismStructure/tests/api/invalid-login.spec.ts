import { test, expect } from '@playwright/test';
import user from '../../test-data/user.json';

test.describe('Invalid Login API Tests', () => {

  test('API-LOGIN-01 - Login with invalid password', async ({ request }) => {

    const response = await request.post(
      'https://api.practicesoftwaretesting.com/users/login',
      {
        data: {
          email: user.email,
          password: 'WrongPassword123!'
        }
      }
    );

    expect(response.status()).not.toBe(200);
  });


  test('API-LOGIN-02 - Login with invalid email', async ({ request }) => {

    const response = await request.post(
      'https://api.practicesoftwaretesting.com/users/login',
      {
        data: {
          email: 'invaliduser@example.com',
          password: user.password
        }
      }
    );

    expect(response.status()).not.toBe(200);
  });


  test('API-LOGIN-03 - Login with invalid email and password', async ({ request }) => {

    const response = await request.post(
      'https://api.practicesoftwaretesting.com/users/login',
      {
        data: {
          email: 'invaliduser@example.com',
          password: 'WrongPassword123!'
        }
      }
    );

    expect(response.status()).not.toBe(200);
  });


  test('API-LOGIN-04 - Login with empty credentials', async ({ request }) => {

    const response = await request.post(
      'https://api.practicesoftwaretesting.com/users/login',
      {
        data: {
          email: '',
          password: ''
        }
      }
    );

    expect(response.status()).not.toBe(200);
  });

});