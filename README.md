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


### Summary

- Smoke tests cover the main user journey.
- Regression tests cover validation and negative scenarios.
- UI automation is implemented using Playwright.
- API testing is implemented using Playwright API requests.


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