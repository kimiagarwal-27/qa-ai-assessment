import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import user from '../../test-data/user.json';

test('User should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(user.email, user.password);

  await expect(page).toHaveURL(/account/);
});