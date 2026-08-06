# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkout.spec.ts >> Checkout with Cash on Delivery
- Location: tests\ui\checkout.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Payment was successful')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Payment was successful')
  - Test timeout of 30000ms exceeded.

```

```yaml
- text: View the
- link "Documentation":
  - /url: https://testsmith-io.github.io/practice-software-testing/#/
- text: for this application. Practice Black Box Testing & Bug Hunting
- button "Testing Guide"
- button "🐛 Bug Hunting"
- navigation:
  - link "Practice Software Testing - Toolshop":
    - /url: /
    - img
  - menubar "Main menu":
    - menuitem "Home":
      - link "Home":
        - /url: /
    - menuitem "Categories":
      - button "Categories"
    - menuitem "Contact":
      - link "Contact":
        - /url: /contact
    - menuitem "Jane Doe":
      - button "Jane Doe"
    - menuitem "cart":
      - link "cart":
        - /url: /checkout
        - text: "1"
  - button "Select language": EN
- list:
  - listitem: Cart 1
  - listitem: Sign in 2
  - listitem: Billing Address 3
  - listitem: Payment 4
- heading "Payment" [level=3]
- text: Payment Method
- combobox "Payment Method":
  - option "Choose your payment method" [disabled]
  - option "Bank Transfer"
  - option "Cash on Delivery" [selected]
  - option "Credit Card"
  - option "Buy Now Pay Later"
  - option "Gift Card"
- button "Confirm"
- contentinfo:
  - text: This is a DEMO application (
  - link "GitHub repo":
    - /url: https://github.com/testsmith-io/practice-software-testing
  - text: ), used for software testing training purpose. |
  - link "Privacy Policy":
    - /url: /privacy
  - text: "| Banner photo by"
  - link "Barn Images":
    - /url: https://unsplash.com/@barnimages
  - text: "on"
  - link "Unsplash":
    - /url: https://unsplash.com/photos/t5YUoHW6zRo
  - text: . v2.3 | Built 2026-07-17 | Angular 20.0.5
- button "Open chat":
  - img
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Checkout with Cash on Delivery', async ({ page }) => {
  4  | 
  5  |   // Open website
  6  |   await page.goto('https://practicesoftwaretesting.com/');
  7  | 
  8  |   // Login
  9  |   await page.locator('[data-test="nav-sign-in"]').click();
  10 |   await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  11 |   await page.locator('[data-test="password"]').fill('welcome01');
  12 | 
  13 |   await page.locator('[data-test="login-submit"]').click();
  14 |   await page.waitForTimeout(2000);
  15 | 
  16 |   await page.getByText('Home').click();
  17 | 
  18 |   // Search product
  19 |   await page.locator('[data-test="search-query"]').fill('Hammer');
  20 |   await page.keyboard.press('Enter');
  21 | 
  22 |   await page.waitForTimeout(3000);
  23 | 
  24 | 
  25 |   // Open product
  26 |   await page.locator('[data-test="product-name"]').nth(3).click();
  27 |   await page.waitForTimeout(3000);
  28 | 
  29 |   // Add to cart
  30 |   await page.locator('[data-test="add-to-cart"]').click()
  31 |   await page.waitForTimeout(3000);
  32 | 
  33 |   // Open cart
  34 |   await page.locator('[data-test="nav-cart"]').click();
  35 |   await page.waitForTimeout(5000);
  36 | 
  37 |   // Proceed to checkout
  38 |   await page.locator('[data-test="proceed-1"]').click();
  39 |   await page.waitForTimeout(5000);
  40 |   await page.locator('[data-test="proceed-2"]').click();
  41 | 
  42 |   await page.locator('[data-test="country"]').click;
  43 |   await page.locator('input[name="India"]').click;
  44 |   await page.locator('[data-test="postal_code"]').fill('201301');
  45 | 
  46 |   await page.locator('[data-test="house_number"]').fill('a-10');
  47 | 
  48 |   await page.locator('[data-test="street"]').fill('Chi -10');
  49 | 
  50 |   await page.locator('[data-test="city"]').fill('Noida');
  51 |   await page.locator('[data-test="state"]').fill('UP');
  52 |   await page.waitForTimeout(3000);
  53 |   await page.locator('[data-test="proceed-3"]').click();
  54 | 
  55 | 
  56 |   // Select Cash on Delivery
  57 |   await page.locator('[data-test="payment-method"]').click
  58 |   await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
  59 |   await page.waitForTimeout(1000);
  60 | 
  61 |   // Confirm order
  62 |   await page.locator('[data-test="finish"]').click();
  63 | 
  64 |   // Verify success message appear
> 65 |   await expect(page.getByText('Payment was successful')).toBeVisible();
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  66 |   
  67 | });
```