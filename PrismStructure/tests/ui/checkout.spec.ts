import { test, expect } from '@playwright/test';

test.setTimeout(70000);

test('Checkout with Cash on Delivery', async ({ page }) => {
  // Open website
  await page.goto('https://practicesoftwaretesting.com/');

  // Login
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill('kimi.agarwal@tothenew.com');
  await page.locator('[data-test="password"]').fill('Kimicutiepie1989@');
  await page.locator('[data-test="login-submit"]').click();

  //click on home
  await page.getByText('Home').click();
  // Search product
  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.keyboard.press('Enter');

  // Open first matching product
  await page.locator('[data-test="product-name"]').nth(4).click();

  // Add to cart
  await page.locator('[data-test="add-to-cart"]').click();

  // Open cart
  await page.locator('[data-test="nav-cart"]').click();

  // Proceed to checkout
  await page.locator('[data-test="proceed-1"]').click();
  await page.locator('[data-test="email"]').fill('kimi.agarwal@tothenew.com');
  await page.locator('[data-test="password"]').fill('Kimicutiepie1989@');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="proceed-2"]').click();

  // Address details
  await page.locator('[data-test="country"]').selectOption({ label: 'India' });
  await page.locator('[data-test="postal_code"]').fill('201301');
  await page.locator('[data-test="house_number"]').fill('A-10');
  await page.locator('[data-test="street"]').fill('Chi-10');
  await page.locator('[data-test="city"]').fill('Noida');
  await page.locator('[data-test="state"]').fill('UP');

  await page.locator('[data-test="proceed-3"]').click();

  // Payment method
  await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');

  // Finish order
  await page.locator('[data-test="finish"]').click();

  // Verify success message
  await expect(page.getByText('Payment was successful')).toBeVisible();
});