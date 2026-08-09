# Project Information

## Primary AI Tool(s) Used

- Cursor AI
- ChatGPT

## Application Under Test

Practice Software Testing Toolshop

https://practicesoftwaretesting.com/

## Assessment Start Date

31 July 2026

## Submission Date

07 August 2026

---

# Project Summary

This project focuses on testing the Practice Software Testing Toolshop application using Playwright and TypeScript.

The scope includes requirement analysis, risk identification, test planning, manual test case design, test data preparation, UI automation, API automation, debugging, and test execution reporting.

AI tools were used throughout the QA lifecycle to assist with requirements analysis, test design, automation development, debugging, and documentation.

The automated UI coverage includes user registration, login, invalid login, product search, shopping cart, checkout, invoice verification, and logout.

The API automation covers user login, cart creation, and invoice generation.

---

# Tools Used

- Playwright
- TypeScript
- Node.js
- Cursor AI
- ChatGPT
- Git
- GitHub
- Visual Studio Code

---

# Setup Summary

## 1. How you provide project and system-under-test context to the AI tool

I provided Cursor AI and ChatGPT with the application URL, project structure, testing objectives, and functional requirements.

This context was used to generate relevant test scenarios, automation suggestions, Page Object Models, and documentation.

---

## 2. How you use AI for requirement analysis

AI was used to analyze the Toolshop application and identify:

- Main functional modules
- Major user flows
- Business and QA risks
- Testing priorities
- Smoke and regression scope

The AI-generated suggestions were reviewed and refined based on manual exploration of the application.

---

## 3. How you use AI for test planning and strategy

AI helped identify and categorize test scenarios into Smoke and Regression testing.

It also helped identify suitable UI and API scenarios for automation.

The final test scope was selected based on application functionality, business risk, and automation feasibility.

---

## 4. How you use AI for manual test case design

AI was used to generate positive, negative, and edge-case scenarios.

The scenarios were reviewed and refined manually and documented in:

`FunctionalTestCase.csv`

---

## 5. How you use AI for automation design

AI assisted with:

- Playwright test structure
- Page Object Model
- Locators
- Assertions
- Reusable methods
- Test data organization
- UI and API test implementation

The generated suggestions were reviewed and modified based on the actual application behavior.

---

## 6. How you validate and refine AI-generated scripts

AI-generated code was executed locally using Playwright.

When failures occurred, the error messages and test behavior were analyzed.

Incorrect locators, assertions, test flows, and test data were reviewed and updated until the expected behavior was achieved.

---

## 7. How you use AI for test data generation

AI was used to suggest test data required for authentication and application flows.

Reusable test data such as the application URL and user credentials was maintained separately in:

`test-data/user.json`

Sensitive credentials should be managed using environment variables or a secure secret-management solution in a real project.

---

## 8. How you use AI for debugging failing tests

AI was used to analyze Playwright failures, locator issues, API response errors, and test execution problems.

For example, AI assistance was used to investigate locator failures and an API test where the expected status code was 200 but the actual response was 423.

All suggested fixes were verified against the actual application before implementation.

---

## 9. What information you avoid sharing with AI tools

Sensitive information such as company source code, confidential business information, API secrets, production credentials, and customer data was not shared with AI tools.

---

## 10. How you would reuse this QA workflow in a real project

The workflow can be reused by following these steps:

1. Analyze requirements and application functionality.
2. Identify major user flows and QA risks.
3. Design functional test scenarios.
4. Prepare reusable test data.
5. Select high-priority scenarios for automation.
6. Implement UI and API automation using Playwright.
7. Use Page Object Model for reusable UI actions.
8. Execute tests and analyze failures.
9. Use AI to assist with debugging and optimization.
10. Review and validate all AI-generated suggestions.
11. Maintain test documentation and execution reports.