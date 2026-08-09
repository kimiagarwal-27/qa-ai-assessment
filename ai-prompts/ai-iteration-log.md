# AI Iteration Log

## 1. Purpose

This document records how AI tools were used during the QA automation assessment.

AI tools used:

* Cursor AI
* ChatGPT

AI was used for test planning, test case generation, Playwright code assistance, debugging, negative scenario identification, and documentation.

All AI-generated suggestions were reviewed and validated against the actual application and API behavior.

---

## 2. AI Iteration 1 — Test Planning

### Objective

Identify major user journeys and risks for the Toolshop application.

### AI Assistance

AI was used to identify important functional areas such as:

* User Registration
* User Login
* Product Search
* Add to Cart
* Checkout
* Invoice
* Logout
* API authentication

### QA Validation

The suggested scenarios were reviewed and converted into relevant UI and API test cases.

### Result

A functional test coverage list was created for the assessment.

---

## 3. AI Iteration 2 — UI Test Generation

### Objective

Create Playwright automation for important user journeys.

### AI Assistance

AI was used to generate and improve Playwright test structures for:

* Registration
* Login
* Invalid Login
* Product Search
* Add Product to Cart
* Checkout
* Invoice Verification
* Logout

### QA Validation

Selectors, assertions, navigation, and test execution were manually verified.

### Result

UI automation tests were implemented and executed using Playwright.

---

## 4. AI Iteration 3 — API Test Generation

### Objective

Increase API test coverage, especially negative scenarios.

### AI Assistance

AI suggested scenarios including:

* Valid Login
* Invalid Login
* Missing Credentials
* Missing Email
* Missing Password
* Invalid Token
* Duplicate Registration

### QA Validation

Each API test was executed against the actual Toolshop API.

Expected status codes and response structures were updated based on actual API behavior.

### Result

Additional negative API coverage was added.

---

## 5. AI Iteration 4 — Missing Credentials API

### AI Suggestion

The initial test checked for a `message` property in the API response.

### Actual API Response

```json
{
  "error": "Invalid login request"
}
```

### Issue

The initial AI-generated assertion expected:

```typescript
expect(responseBody).toHaveProperty('message');
```

### Correction

The assertion was changed to:

```typescript
expect(responseBody).toHaveProperty('error');
```

### QA Learning

AI suggestions must be validated against the actual API response instead of being accepted blindly.

---

## 6. AI Iteration 5 — Invalid Token API

### AI Suggestion

The initial test expected the API response to contain an `error` property.

### Actual API Response

```json
{
  "message": "Unauthorized"
}
```

### Issue

The initial assertion was incorrect.

### Correction

The assertion was changed to:

```typescript
expect(responseBody).toHaveProperty('message');
expect(responseBody.message).toBe('Unauthorized');
```

### Result

The test was updated according to the actual API contract and re-executed.

---

## 7. AI Iteration 6 — Duplicate Registration

### Objective

Validate that duplicate user registration is rejected.

### AI Assistance

AI suggested creating a user and then attempting registration again with the same email.

### Actual Result

The first registration attempt returned:

```text
HTTP 422
```

instead of the initially expected `201`.

### QA Validation

The API response was investigated before changing the assertion.

The test was not modified simply to force a pass.

### Result

The actual API behavior was used to determine the correct expected response and validation.

---

## 8. AI-Assisted Debugging Process

When an automated test failed, the following process was followed:

1. Execute the test.
2. Review the Playwright error.
3. Review the actual API response or UI behavior.
4. Ask AI to analyze the failure.
5. Compare the AI suggestion with the actual behavior.
6. Update the test only when supported by evidence.
7. Re-run the test.
8. Confirm the final result.

---

## 9. Human-in-the-Loop Validation

AI was used as an assistant and not as the final decision maker.

The QA validation process was:

**AI Suggestion → QA Review → Test Implementation → Test Execution → Actual Result → Correction → Re-execution**

This helped prevent incorrect assumptions about API status codes, response structures, and application behavior.

---

## 10. AI Limitations Identified

During the assessment, AI-generated suggestions sometimes differed from actual application behavior.

Examples:

* Expected API response field did not match the actual field.
* Expected status code did not always match the actual API response.
* Some API assumptions required validation through execution.

Therefore, AI-generated test cases were always validated against the actual system.

---

## 11. Final Outcome

AI helped improve:

* Test scenario coverage
* Negative API testing
* Playwright automation
* Failure analysis
* Test documentation
* QA risk identification

The final tests were based on actual application behavior and were validated through Playwright execution.
