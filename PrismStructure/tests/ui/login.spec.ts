import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('@Smoke User Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.navigate();

  await login.login(
    'customer@practicesoftwaretesting.com',
        'welcome01'
  );
  await page.waitForTimeout(3000);

});