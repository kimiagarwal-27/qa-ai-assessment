import { test, expect } from '@playwright/test';
import user from '../../../test-data/user.json'; // adjust the path if needed

test('Search Product', async ({ page }) => {

  await page.goto(user.url);
  await page.waitForTimeout(3000);

  await page.locator('[data-test="search-query"]').fill('mammer');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);

  await expect(page.getByText('Searched for: mammer')).toBeVisible();

});