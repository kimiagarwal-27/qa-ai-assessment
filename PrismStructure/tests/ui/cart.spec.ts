import { test, expect } from '@playwright/test';

test('Add Product to Cart', async ({ page }) => {

  // Open website
  await page.goto('https://practicesoftwaretesting.com/');

  // Search for a product
  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  // Open the product
  await page.locator('[data-test="product-name"]').first().click();

  // Add product to cart
  await page.locator('[data-test="add-to-cart"]').click();
  await page.waitForTimeout(3000);
  // Open cart
  await page.locator('[data-test="nav-cart"]').click();
  await page.waitForTimeout(5000);

  // Verify product cart url
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/checkout');
  
});