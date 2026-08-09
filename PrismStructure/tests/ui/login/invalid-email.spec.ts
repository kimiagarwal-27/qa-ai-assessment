import { test, expect } from '@playwright/test';
import user from '../../../test-data/user.json';

test('@Regression Invalid Email Format', async ({ page }) => {

  // Open website
  await page.goto(user.url);

  // Click Sign In
  await page.getByRole('link', { name: 'Sign in' }).click();

  // Enter invalid email format
  await page.getByPlaceholder('Your email').fill('kimi.invalid.com');

  // Enter password
  await page.getByPlaceholder('Your password').fill('WrongPassword');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify validation message
  await expect(page.getByText('Email format is invalid')).toBeVisible();

});