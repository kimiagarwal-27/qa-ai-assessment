# Documentation and Summary

## 1. Project Overview

The objective of this project was to analyze the Practice Software Testing Toolshop application from a QA perspective and develop an automated testing solution using Playwright and TypeScript.

AI was used throughout the QA lifecycle to support requirements analysis, test design, test data planning, automation development and debugging.

---

## 2. QA Activities Completed

The following activities were completed:

1. Application and requirements analysis
2. Identification of major user flows
3. Risk identification
4. Test scenario design
5. Test data identification
6. UI automation
7. API automation
8. Page Object Model implementation
9. Cross-browser testing
10. Debugging of failed tests
11. Test execution and reporting
12. Documentation

---

## 3. Automated UI Flows

The following UI flows were automated:

- User Registration
- User Login
- Invalid Login
- Product Search
- Add Product to Cart
- Checkout
- Invoice Verification
- Logout

---

## 4. Automated API Flows

The following API flows were automated:

- User Login API
- Cart Creation API
- Invoice Generation API

---

## 5. Framework Structure

The automation framework follows a modular structure.

### Page Objects

- `LoginPage.ts`
- `RegisterPage.ts`

### UI Tests

- `login.spec.ts`
- `invalidlogin.spec.ts`
- `registration.spec.ts`
- `search-product.spec.ts`
- `cart.spec.ts`
- `checkout.spec.ts`
- `invoice.spec.ts`
- `logout.spec.ts`

### API Tests

- `auth.spec.ts`
- `cart.spec.ts`
- `invoice.spec.ts`

### Test Data

- `user.json`

---

## 6. Tools and Technologies

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- Playwright HTML Report
- AI assistance for test planning and automation

---

## 7. AI Usage

AI was used as a supporting tool rather than as a replacement for QA validation.

AI assistance was used for:

- Requirements analysis
- Test scenario generation
- Risk identification
- Test data planning
- Playwright code generation
- Page Object Model implementation
- Locator troubleshooting
- API debugging
- Playwright best-practice recommendations
- Documentation

Generated suggestions were reviewed and validated against the actual application before being included in the project.

---

## 8. Key Findings

The automation exercise helped identify important areas requiring validation, particularly authentication, cart, checkout and invoice flows.

The project also demonstrated the benefits of separating test data and page-specific actions from test cases.

---

## 9. Challenges and Debugging

Some challenges encountered during automation included:

- Locator failures
- Authentication state issues
- API responses with unexpected status codes
- Maintaining reusable test data
- Handling navigation between application pages
- Ensuring tests work across different browsers

These issues were investigated using Playwright error messages, reports and AI-assisted debugging.

---

## 10. Conclusion

The project resulted in a structured Playwright automation framework covering both UI and API testing.

The use of Page Object Model, external test data and separate UI/API test suites improves maintainability and reusability.

AI assistance helped accelerate test planning, automation development and debugging while the final test implementation and validation remained under QA review.