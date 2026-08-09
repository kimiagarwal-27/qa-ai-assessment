import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import user from '../../test-data/user.json';

test('@Smoke User Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.navigate();

  await login.login(user.email, user.password);

  // Verify that login was successful
  await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();

});