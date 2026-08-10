import 'dotenv/config';

export const env = {
  baseUrl:
    process.env.BASE_URL ??
    'https://practicesoftwaretesting.com',

  apiUrl:
    process.env.API_URL ??
    'https://api.practicesoftwaretesting.com',

  testEmail: process.env.TEST_EMAIL ?? '',
  testPassword: process.env.TEST_PASSWORD ?? '',
};

if (!env.testEmail) {
  throw new Error('TEST_EMAIL is not configured');
}

if (!env.testPassword) {
  throw new Error('TEST_PASSWORD is not configured');
}