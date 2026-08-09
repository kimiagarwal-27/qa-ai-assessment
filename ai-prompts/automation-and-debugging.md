# AI Prompts – Automation and Debugging

## 1. Playwright Framework Setup

### Prompt

Help me set up a Playwright TypeScript automation framework for the Practice Software Testing Toolshop application.

### AI Response Summary

Suggested a project structure containing:

- UI tests
- API tests
- Page Objects
- Test data
- Fixtures
- Reports
- Utilities

### Outcome

Created a Playwright TypeScript automation framework with separate UI and API test suites.

---

## 2. Page Object Model – Login

### Prompt

Create a Playwright Page Object Model for Login.

### AI Response Summary

Generated a reusable Login Page Object containing navigation and login actions.

### Outcome

Created:

`pages/loginPage.ts`

The Login Page Object is reused by multiple UI tests.

---

## 3. Page Object Model – Registration

### Prompt

Create a Page Object Model for the registration functionality.

### AI Response Summary

Suggested creating a reusable Register Page class containing registration-related locators and actions.

### Outcome

Created:

`pages/RegisterPage.ts`

This keeps registration logic separate from test cases.

---

## 4. External Test Data

### Prompt

How can I reuse the application URL and login credentials from a separate JSON file in Playwright?

### AI Response Summary

Suggested storing the URL, email and password in a JSON test data file and importing the data into the Page Object.

### Outcome

Created:

`test-data/user.json`

The Login Page Object uses the URL and credentials from the external test data.

---

## 5. UI Automation

The following UI tests were implemented:

- User Registration
- User Login
- Invalid Login
- Search Product
- Add Product to Cart
- Checkout
- Invoice Verification
- Logout

The tests are located under:

`tests/ui/`

---

## 6. API Automation

The following API tests were implemented:

- User Login API
- Cart Creation API
- Invoice Generation API

The tests are located under:

`tests/api/`

---

## 7. Locator Debugging

### Prompt

Analyze the Playwright failure where `[data-test="nav-menu"]` was not found.

### AI Response Summary

AI helped analyze the locator, timeout, page state and login/navigation flow.

### Outcome

The test flow and locator usage were reviewed and adjusted based on the actual application behavior.

---

## 8. API Debugging

### Prompt

Help debug the API test failure where the expected response status was 200 but the actual response was 423.

### AI Response Summary

AI helped analyze the response status and investigate whether the issue was related to the request, credentials, account state or API behavior.

### Outcome

The API response and test data were reviewed to understand the cause of the unexpected status code.

---

## 9. Cross-Browser Testing

### Prompt

How can I execute Playwright tests in Chromium, Firefox and WebKit?

### AI Response Summary

Provided guidance for Playwright browser configuration and execution.

### Outcome

The login test was executed successfully across Chrome/Chromium, Firefox and WebKit.

---

## 10. Test Execution and Reporting

### Prompt

How can I run specific Playwright tests and analyze failures using the Playwright report?

### AI Response Summary

Provided Playwright commands for running individual tests and viewing the HTML report.

### Outcome

Used the Playwright HTML report to review test execution results and investigate failures.

---

## 11. Automation Improvements

### Prompt

Review my Playwright automation and suggest improvements following Playwright best practices.

### AI Response Summary

Suggested:

- Page Object Model
- Reusable methods
- External test data
- Stable locators
- Playwright assertions
- Avoiding unnecessary hard waits
- Independent tests

### Outcome

Improved the automation structure and maintainability.

---

# Overall Automation Outcome

AI was used as an assistive tool during automation development and debugging.

The final framework contains:

- Reusable Page Objects
- UI automation
- API automation
- External test data
- Cross-browser execution
- Playwright reporting
- Debugging and failure analysis
