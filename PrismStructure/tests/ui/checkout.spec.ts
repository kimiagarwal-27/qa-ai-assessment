import { test, expect } from '@playwright/test';

test('Checkout with Cash on Delivery', async ({ page }) => {

  // Open website
  await page.goto('https://practicesoftwaretesting.com/');

  // Login
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');

  await page.locator('[data-test="login-submit"]').click();
  await page.waitForTimeout(2000);

  await page.getByText('Home').click();

  // Search product
  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.keyboard.press('Enter');

  await page.waitForTimeout(3000);


  // Open product
  await page.locator('[data-test="product-name"]').nth(3).click();
  await page.waitForTimeout(3000);

  // Add to cart
  await page.locator('[data-test="add-to-cart"]').click();
  await page.waitForTimeout(3000);

  // Open cart
  await page.locator('[data-test="nav-cart"]').click();
  await page.waitForTimeout(5000);

  // Proceed to checkout
  await page.locator('[data-test="proceed-1"]').click();
  await page.waitForTimeout(5000);
  await page.locator('[data-test="proceed-2"]').click();

  await page.locator('[data-test="country"]').click;
  await page.locator('input[name="India"]').click;
  await page.locator('[data-test="postal_code"]').fill('201301');

  await page.locator('[data-test="house_number"]').fill('a-10');

  await page.locator('[data-test="street"]').fill('Chi -10');

  await page.locator('[data-test="city"]').fill('Noida');
  await page.locator('[data-test="state"]').fill('UP');
  await page.locator('[data-test="proceed-3"]').click();


  // Select Cash on Delivery
  await page.locator('[data-test="payment-method"]').click
  await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
  await page.waitForTimeout(1000);

  // Confirm order
  await page.locator('[data-test="finish"]').click();

  // Verify success message appear
  await expect(page.getByText('Payment was successful')).toBeVisible();
  
});