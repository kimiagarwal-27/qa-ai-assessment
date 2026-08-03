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

This project focuses on testing the Practice Software Testing Toolshop application using the Playwright Prism Framework. The scope includes requirement analysis, manual test design, UI automation, AI-assisted documentation, and execution reporting. The Login functionality has been automated using the Page Object Model, and AI tools were used throughout the testing lifecycle.

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

I provided Cursor AI and ChatGPT with the application URL, project structure, testing objectives, and functional requirements. This helped generate relevant test cases, Page Object Models, and documentation.

---

## 2. How you use AI for requirement analysis

AI was used to analyze the Toolshop application, identify the main user flows, functional modules, business risks, and testing scope. The output was reviewed and refined manually before use.

---

## 3. How you use AI for test planning and strategy

AI helped categorize scenarios into Smoke and Regression tests and identify both UI and API testing opportunities. The generated plan was validated against the application.

---

## 4. How you use AI for manual test case design

AI generated positive, negative, and edge test scenarios. These were reviewed manually and organized into the FunctionalTestCase.csv file.

---

## 5. How you use AI for automation design

AI assisted in creating the Playwright Page Object Model, test structure, locators, assertions, reusable methods, and test data organization.

---

## 6. How you validate and refine AI-generated scripts

All AI-generated code was executed locally. Incorrect locators and assertions were updated manually until the tests passed successfully.

---

## 7. How you use AI for test data generation

AI generated sample user credentials and test data, which were stored in the `test-data/user.json` file and validated before execution.

---

## 8. How you use AI for debugging failing tests

AI helped identify locator issues, analyze Playwright errors, and suggest fixes. The suggested solutions were verified before implementation.

---

## 9. What information you avoid sharing with AI tools

Sensitive project information such as company source code, credentials, API secrets, confidential business information, and customer data was not shared with AI tools.

---

## 10. How you would reuse this QA workflow in a real project

This workflow can be reused by starting with requirement analysis, creating test scenarios, designing manual test cases, implementing Playwright automation using the Page Object Model, validating AI-generated code, documenting prompts, and maintaining execution reports for future releases.