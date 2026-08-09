# Test Design

## 1. Objective

The objective of test design is to convert the identified requirements and user flows into meaningful functional and API test scenarios.

AI was used to assist in identifying positive, negative and boundary scenarios.

---

## 2. Test Design Approach

The following testing techniques were considered:

- Positive testing
- Negative testing
- Functional testing
- End-to-end testing
- API testing
- Boundary/value validation where applicable
- Authentication testing
- Workflow-based testing

---

## 3. UI Test Scenarios

### Registration
- Register with valid details

### Login
- Login with valid credentials
- Login with invalid credentials

### Product Search
- Search for a product

### Shopping Cart
- Add product to cart

### Checkout
- Complete checkout using Cash on Delivery

### Invoice
- Verify generated invoice

### Logout
- Logout after successful login

---

## 4. API Test Scenarios

- User Login API with valid data
- Create Cart API
- Generate Invoice API

---

## 5. Negative Testing

Negative scenarios were included to verify how the application handles invalid input and unsuccessful operations.

Examples:

- Invalid login credentials

---

## 6. Test Prioritization

High-priority scenarios were selected based on business impact.

### High Priority

- Login
- Registration
- Add to Cart
- Checkout
- Invoice
- API Authentication

### Medium Priority

- Product Search
- Logout
- Cart validation

---

## 7. AI Assistance

AI was used to:

- Generate possible test scenarios
- Suggest positive and negative cases
- Identify missing scenarios
- Help prioritize test cases
- Review whether important user journeys were covered

The final test cases were reviewed and adjusted based on the actual application behavior.