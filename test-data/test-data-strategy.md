# Test Data Strategy

## 1. Purpose

The purpose of this strategy is to maintain reusable and manageable test data separately from test implementation.

Test data is stored in the `test-data` folder and can be reused across UI and API automation tests.

## 2. Test Data Categories

The automation suite uses the following test data:

* Valid user credentials
* Invalid user credentials
* Product search data
* Cart data
* Checkout data
* API request data
* Negative test data

## 3. Test Data Location

Test data is maintained separately from test scripts.

Example:

```text
test-data/
├── user.json
├── environments.json
└── test-data-strategy.md
```

## 4. Reusability

Common test data should be maintained in one location instead of being duplicated across multiple test files.

For example, valid login credentials can be reused by multiple login and checkout tests.

## 5. Sensitive Data

Real passwords, API tokens, and other sensitive credentials should not be committed to GitHub.

Sensitive values should be provided through environment variables or a secure secret-management solution.

Example:

```text
BASE_URL
TEST_USER_EMAIL
TEST_USER_PASSWORD
```

## 6. Negative Test Data

Negative scenarios use dedicated test data such as:

* Invalid email
* Invalid password
* Missing email
* Missing password
* Invalid authentication token
* Duplicate registration data

## 7. Test Data Validation

Test data should be validated before execution to ensure:

* Required fields are available.
* Credentials are valid when positive scenarios require them.
* Negative data represents the intended invalid condition.
* Data does not unintentionally depend on another test.

## 8. Data Independence

Tests should avoid depending on the execution order of other tests.

Where possible, tests should create or prepare the required data independently.

## 9. Maintenance

When application requirements change, test data should be updated in the `test-data` folder rather than duplicated across individual test cases.

## 10. Strategy Summary

The test-data strategy follows these principles:

**Separate → Reuse → Protect → Validate → Maintain**

This approach makes the automation suite easier to maintain and reduces duplication.
