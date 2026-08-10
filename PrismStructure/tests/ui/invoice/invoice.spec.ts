import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/loginPage';
import user from '../../../test-data/user.json';
import { env } from '../../../config/env';



test('@Regression Verify Invoice', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();
  //login
    await login.login(
      env.testEmail,
      env.testPassword
    );
 
  // Open My Account
  await page.getByRole('button', { name: 'kimi agarwal' }).click(); // Replace with your account menu if different

  // Open My Invoices
  await page.getByText('My Invoices').click();

  // Verify invoice page is opened
  await expect(page).toHaveURL(/invoices/);

  // Verify at least one invoice is displayed
  await expect(page.locator('table')).toBeVisible();
  await page.waitForTimeout(3000);
});