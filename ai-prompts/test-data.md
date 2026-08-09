# Test Data

## 1. Objective

The purpose of this document is to define the test data required for executing the UI and API automation tests.

Test data is kept separate from test logic wherever possible to improve maintainability and reusability.

---

## 2. User Test Data

The automation requires user authentication data.

The following information is maintained in the test data file:

- Application URL
- User email
- User password

The data is stored in:

`PrismStructure/test-data/user.json`

Example structure:

{
  "email": "<test-email>",
  "password": "<test-password>",
  "url": "<application-url>"
}

Actual credentials should not be hard-coded directly into test cases.

---

## 3. Product Test Data

The UI automation uses products available in the Toolshop application.

Examples include:

- Product name used for search
- Product selected for adding to cart
- Product used during checkout

Product data should be updated if the application's available products change.

---

## 4. Checkout Test Data

Checkout testing requires valid information such as:

- Country
- Address information
- Payment method
- Product/cart information

The checkout test currently validates the Cash on Delivery flow.

---

## 5. API Test Data

API tests require data such as:

- Authentication credentials
- Product/cart information
- Invoice/order information
- Required request parameters

The API test data is used to construct requests and validate responses.

---

## 6. Test Data Management Approach

The following approach is used:

1. Keep reusable data outside test scripts.
2. Avoid hard-coding credentials inside test cases.
3. Reuse common data across tests where appropriate.
4. Keep environment/application URL configurable.
5. Use independent data where a test modifies application state.

---

## 7. AI Assistance

AI was used to:

- Suggest a structure for external test data
- Identify data required by different test scenarios
- Suggest separating test data from automation logic
- Improve the reusability and maintainability of test data

Sensitive credentials should not be committed to source control in a real production project. Environment variables or secret management should be preferred.