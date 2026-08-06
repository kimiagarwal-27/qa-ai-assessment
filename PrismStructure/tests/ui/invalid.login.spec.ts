import { test, expect } from '@playwright/test';

test('@Regression Invalid Login', async ({ page }) => {

  // Open website
  await page.goto('https://practicesoftwaretesting.com/');

  // Click Sign In
  await page.getByRole('link', { name: 'Sign in' }).click();

  // Enter invalid credentials
  await page.getByPlaceholder('Your email').fill('test@gmail.com');
  await page.getByPlaceholder('Your password').fill('WrongPassword');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify error message
  await expect(page.getByText('Invalid email or password')).toBeVisible();

});