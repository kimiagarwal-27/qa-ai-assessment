import { test, expect } from '@playwright/test';

test('Search Product', async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/');
  await page.waitForTimeout(3000);

  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);

  await expect(page.getByText('Searched for: hammer')).toBeVisible();

});