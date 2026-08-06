# QA AI Practical Assessment

## Project Information

Application Under Test:
https://practicesoftwaretesting.com/

This project contains UI and API automation tests using Playwright.

## Tools Used

- Playwright
- TypeScript
- Cursor AI
- Chromium Browser

## Test Coverage

### UI Tests

- User Registration
- User Login
- Search Product
- Add Product to Cart
- Checkout
- Invoice Verification
- Invalid Login
- Logout


### API Tests

- User Login API
- Cart Creation API
- Invoice Generation API


## Project Setup

Install dependencies:

npm install


Install Playwright browsers:

npx playwright install


## Run Tests

Run all tests:

npx playwright test --project=chromium


Run UI tests:

npx playwright test tests/ui --project=chromium


Run API tests:

npx playwright test tests/api --project=chromium


Run Smoke tests:

npx playwright test --grep @Smoke --project=chromium


Run Regression tests:

npx playwright test --grep @Regression --project=chromium


## Test Report

Generate HTML report:

npx playwright show-report


## AI Usage

Cursor AI was used for:

- Requirement analysis
- Test case design
- Playwright automation support
- Debugging failures
- Documentation assistance

All AI-generated suggestions were reviewed before implementation.