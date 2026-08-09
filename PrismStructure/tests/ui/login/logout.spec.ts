import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/loginPage';
import user from '../../../test-data/user.json';

test('@Regression Logout', async ({ page }) => {

    // Login
    const login = new LoginPage(page);

    await login.navigate();
  
    await login.login(user.email, user.password);

    await page.waitForTimeout(3000);
  // Click My Account
  await page.getByText('Jane Doe').click();
 // await page.locator('[data-test="nav-menu1"]').click();


  // Click Logout
  await page.locator('[data-test="nav-sign-out"]').click();
await page.waitForTimeout(5000);


})