import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('@Smoke User Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.navigate();

  await login.login(
      'kimi.agarwal@tothenew.com',
        'Kimicutiepie1989@'
  );
  await page.waitForTimeout(3000);

});