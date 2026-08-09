# Requirements Traceability Matrix – Toolshop Demo

## 1. Purpose

This traceability matrix maps the identified requirements to acceptance criteria, manual test cases, and Playwright automation.

The purpose is to ensure that the major application flows are covered by both manual test design and automated testing.

---

## 2. Traceability Matrix

| Requirement ID | Requirement | Acceptance Criteria | Test Case ID | Test Type | Automation | Status |
|---|---|---|---|---|---|---|
| REQ-REG-001 | User should be able to register successfully | AC-REG-001, AC-REG-005 | TC_SMK_001 | Smoke | tests/ui/registration.spec.ts | Automated |
| REQ-REG-002 | Registration should prevent duplicate email | AC-REG-003 | TC_REG_002 | Regression | Not automated | Planned |
| REQ-LOGIN-001 | Registered user should be able to log in | AC-LOGIN-001, AC-LOGIN-005 | TC_SMK_002 | Smoke | tests/ui/login.spec.ts | Automated |
| REQ-LOGIN-002 | Invalid password should be rejected | AC-LOGIN-002, AC-LOGIN-003 | TC_REG_001 | Regression | tests/ui/invalidlogin.spec.ts | Automated |
| REQ-SEARCH-001 | User should be able to search for products | AC-SEARCH-001, AC-SEARCH-002 | TC_SMK_003 | Smoke | Not automated | Planned |
| REQ-SEARCH-002 | Search should handle unavailable products | AC-SEARCH-003 | TC_REG_003 | Regression | Not automated | Planned |
| REQ-CART-001 | User should be able to add a product to the cart | AC-CART-001 | TC_SMK_004 | Smoke | tests/ui/cart.spec.ts | Automated |
| REQ-CART-002 | User should be able to update product quantity | AC-CART-003, AC-CART-004 | TC_SMK_005 | Smoke | tests/ui/cart.spec.ts | Automated |
| REQ-CART-003 | User should be able to remove a product | AC-CART-006 | TC_REG_004 | Regression | tests/ui/cart.spec.ts | Automated |
| REQ-CART-004 | Cart totals should be calculated correctly | AC-CART-004, AC-CART-005 | TC_REG_008 | Regression | tests/ui/cart.spec.ts | Automated |
| REQ-CHECKOUT-001 | User should be able to proceed to checkout | AC-CHECKOUT-001 | TC_SMK_006 | Smoke | tests/ui/checkout.spec.ts | Automated |
| REQ-CHECKOUT-002 | Mandatory checkout fields should be validated | AC-CHECKOUT-003, AC-CHECKOUT-004 | TC_REG_005 | Regression | tests/ui/checkout.spec.ts | Automated |
| REQ-CHECKOUT-003 | User should review and confirm the order before placement | AC-CHECKOUT-006, AC-CHECKOUT-007 | TC_REG_009 | Regression | tests/ui/checkout.spec.ts | Automated |
| REQ-INVOICE-001 | Invoice should be generated after successful order | AC-INVOICE-001, AC-INVOICE-002 | TC_SMK_007 | Smoke | tests/ui/invoice.spec.ts | Automated |
| REQ-INVOICE-002 | Invoice should contain correct order information | AC-INVOICE-003 through AC-INVOICE-010 | TC_REG_006 | Regression | tests/ui/invoice.spec.ts | Automated |
| REQ-INVOICE-003 | Invoice line items should match the placed order | AC-INVOICE-005 through AC-INVOICE-010 | TC_REG_010 | Regression | tests/ui/invoice.spec.ts | Automated |
| REQ-LOGOUT-001 | User should be able to log out successfully | AC-LOGOUT-001, AC-LOGOUT-002 | TC_REG_007 | Regression | tests/ui/logout.spec.ts | Automated |
| REQ-API-LOGIN-001 | Login API should reject invalid credentials | AC-API-LOGIN-002 | TC_API_001 | Regression | tests/api/auth.spec.ts | Automated |
| REQ-API-REG-001 | Registration API should reject duplicate users | AC-API-REG-002 | TC_API_002 | Regression | Not automated | Planned |
| REQ-API-CART-001 | Cart API should reject invalid product or quantity | AC-API-CART-002, AC-API-CART-003 | TC_API_003 | Regression | tests/api/cart.spec.ts | Automated |
| REQ-API-LOGOUT-001 | Logout API should invalidate authentication | AC-API-LOGOUT-001, AC-API-LOGOUT-002 | TC_API_004 | Regression | Not automated | Planned |

---

## 3. Automation Coverage Summary

| Area | Manual Test Cases | Automated Test Cases | Automation Status |
|---|---:|---:|---|
| Registration | 2 | 1 | Partial |
| Login | 2 | 2 | Covered |
| Product Search | 2 | 0 | Not Automated |
| Shopping Cart | 4 | 4 | Covered |
| Checkout | 3 | 3 | Covered |
| Invoice | 3 | 3 | Covered |
| Logout | 1 | 1 | Covered |
| API | 4 | 2 | Partial |
| **Total** | **21** | **16** | **Partial Coverage** |

> Note: "Automated" means that a corresponding Playwright specification exists. The status should be updated to **Passed** or **Failed** after actual test execution.

---

## 4. Smoke Test Coverage

The following critical business flows are included in the smoke suite:

- User Registration
- User Login
- Product Search
- Add Product to Cart
- Update Cart Quantity
- Checkout
- Invoice Generation

Automation currently exists for:

- User Registration
- User Login
- Add Product to Cart
- Update Cart Quantity
- Checkout
- Invoice Generation

Product Search automation is currently planned.

---

## 5. Regression Test Coverage

Regression coverage includes:

- Invalid Login
- Duplicate Registration
- Search Non-existing Product
- Remove Product from Cart
- Mandatory Checkout Field Validation
- Invoice Detail Verification
- Logout
- Cart Quantity Calculation
- Checkout Confirmation
- Invoice Line-item Validation
- Negative API Scenarios

Automation currently covers:

- Invalid Login
- Remove Product from Cart
- Mandatory Checkout Field Validation
- Invoice Detail Verification
- Cart Quantity Calculation
- Checkout Confirmation
- Invoice Line-item Validation
- Logout
- Negative Login API
- Negative Cart API

Some negative registration and logout API scenarios are currently planned.

---

## 6. API Automation Coverage

| API Area | Test Case | Automation File | Status |
|---|---|---|---|
| Login API | TC_API_001 – Invalid Login API | tests/api/auth.spec.ts | Automated |
| Registration API | TC_API_002 – Duplicate Registration API | Not automated | Planned |
| Cart API | TC_API_003 – Invalid Cart API | tests/api/cart.spec.ts | Automated |
| Logout API | TC_API_004 – Logout Token Validation API | Not automated | Planned |
| Invoice API | Invoice generation/verification | tests/api/invoice.spec.ts | Automated |

---

## 7. Traceability Flow

The project follows this traceability flow:

Requirement
↓
Acceptance Criteria
↓
Manual Test Case
↓
Playwright Automation
↓
Execution Result

Example:

REQ-CART-004
↓
AC-CART-004 / AC-CART-005
↓
TC_REG_008 – Verify Cart Quantity Calculation
↓
tests/ui/cart.spec.ts
↓
Playwright execution result

---

## 8. Automation Status Definitions

- **Automated** – Playwright test script has been created for the test case.
- **Passed** – Automated test has been executed successfully.
- **Failed** – Automated test has been executed and failed.
- **Planned** – Test case is documented but automation has not yet been implemented.
- **Blocked** – Test cannot currently be executed because of an environment, data, or application dependency.

Automation should only be marked as Passed after actual execution and verification of the result.