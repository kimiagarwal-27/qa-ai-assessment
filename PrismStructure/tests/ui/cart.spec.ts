import { test, expect } from '@playwright/test';
import user from '../../test-data/user.json'; // adjust the path if needed

test('Add Product to Cart', async ({ page }) => {

  // Open website
  await page.goto(user.url);
await page.waitForTimeout(3000);
  // Search for a product
  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.locator('[data-test="search-submit"]').click();

  // Open the first product
  await page.locator('[data-test="product-name"]').nth(4).click();

  // Add product to cart
  await page.locator('[data-test="add-to-cart"]').click();

  // Open cart
  await page.locator('[data-test="nav-cart"]').click();

  // Verify cart URL
  await expect(page).toHaveURL(`${user.url}checkout`);
});