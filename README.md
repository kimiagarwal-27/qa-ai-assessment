# QA AI Practical Assessment

## Project Information

### Application Under Test

[Practice Software Testing Toolshop](https://practicesoftwaretesting.com/)

This project contains UI and API automation tests using Playwright and TypeScript.

---

## Tools Used

- Playwright
- TypeScript
- Node.js
- Cursor AI
- ChatGPT
- Git
- GitHub
- Visual Studio Code

---

## Test Coverage

### UI Tests

The following scenarios are covered:

- User Registration
- User Login
- Invalid Login Validation
- Product Search
- Add Product to Cart
- Cart Update and Remove Product
- Checkout with Cash on Delivery
- Invoice Verification
- User Logout

### API Tests

The following API scenarios are covered:

- User Login API
- Cart Creation API
- Invoice Generation API

---

## Automation Framework

The automation framework uses:

- Playwright with TypeScript
- Page Object Model for reusable page actions
- Separate UI and API test suites
- External test data
- Playwright HTML reporting

---

## Test Strategy

- Smoke testing covers the main user journey.
- Regression testing covers validation and negative scenarios.
- UI automation is implemented using Playwright.
- API testing is implemented using Playwright API requests.
- Tests are organized using reusable Page Objects and external test data.

---

## Project Structure

```text
PrismStructure/
├── pages/
│   ├── loginPage.ts
│   └── RegisterPage.ts
│
├── test-data/
│   └── user.json
│
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts
│   │   ├── invalidlogin.spec.ts
│   │   ├── registration.spec.ts
│   │   ├── search-product.spec.ts
│   │   ├── cart.spec.ts
│   │   ├── checkout.spec.ts
│   │   ├── invoice.spec.ts
│   │   └── logout.spec.ts
│   │
│   └── api/
│       ├── auth.spec.ts
│       ├── cart.spec.ts
│       └── invoice.spec.ts
│
└── playwright.config.ts