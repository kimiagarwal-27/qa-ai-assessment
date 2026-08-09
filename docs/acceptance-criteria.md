# Acceptance Criteria – Toolshop Demo

## 1. User Registration

### AC-REG-001 – Valid Registration

A new user should be able to register successfully using valid registration details.

### AC-REG-002 – Required Fields

The registration form should validate all mandatory fields before allowing registration.

### AC-REG-003 – Duplicate Email

The application should prevent registration when an already registered email address is used.

### AC-REG-004 – Invalid Registration Data

The application should display appropriate validation messages when invalid registration data is entered.

### AC-REG-005 – Successful Registration

After successful registration, the user should receive confirmation that the account has been created.

---

## 2. User Login

### AC-LOGIN-001 – Valid Login

A registered user should be able to log in using valid email and password credentials.

### AC-LOGIN-002 – Invalid Password

The application should reject login when an incorrect password is provided.

### AC-LOGIN-003 – Invalid Credentials

The application should display an appropriate error message when invalid credentials are submitted.

### AC-LOGIN-004 – Required Fields

The login form should prevent submission when mandatory fields are empty.

### AC-LOGIN-005 – Successful Authentication

After successful login, the authenticated user's navigation/menu should be displayed.

---

## 3. Product Search

### AC-SEARCH-001 – Search Existing Product

The user should be able to search for an available product by entering its name or search term.

### AC-SEARCH-002 – Relevant Search Results

The application should display products relevant to the entered search term.

### AC-SEARCH-003 – Non-existing Product

When a product does not exist, the application should display an appropriate no-results message.

### AC-SEARCH-004 – Empty Search

The application should handle an empty search request appropriately without causing an application error.

---

## 4. Product Details

### AC-PRODUCT-001 – Product Details

The user should be able to open a product and view its relevant details.

### AC-PRODUCT-002 – Product Information

The product page should display the product name, price, description and available information correctly.

### AC-PRODUCT-003 – Add Product

The user should be able to add an available product to the shopping cart.

---

## 5. Shopping Cart

### AC-CART-001 – Add Product

A selected product should be added successfully to the shopping cart.

### AC-CART-002 – Cart Product Details

The cart should display the selected product with the correct product information and price.

### AC-CART-003 – Update Quantity

The user should be able to increase or decrease the product quantity in the cart.

### AC-CART-004 – Quantity Calculation

When product quantity changes, the corresponding line total should be recalculated correctly.

### AC-CART-005 – Cart Total

The overall cart total should be recalculated correctly after quantity changes.

### AC-CART-006 – Remove Product

The user should be able to remove a product from the shopping cart.

### AC-CART-007 – Empty Cart

After removing all products, the cart should display the appropriate empty-cart state.

---

## 6. Checkout

### AC-CHECKOUT-001 – Access Checkout

A user with a product in the cart should be able to proceed to checkout.

### AC-CHECKOUT-002 – Billing Details

The user should be able to enter the required billing/customer information.

### AC-CHECKOUT-003 – Mandatory Fields

The checkout process should validate mandatory fields before allowing the user to continue.

### AC-CHECKOUT-004 – Invalid/Missing Details

Appropriate validation messages should be displayed when mandatory checkout information is missing or invalid.

### AC-CHECKOUT-005 – Payment Method

The user should be able to select an available payment method such as Cash on Delivery.

### AC-CHECKOUT-006 – Order Review

Before final confirmation, the user should be able to review the order details, products, quantities and totals.

### AC-CHECKOUT-007 – Order Confirmation

The order should be placed only after the user performs the final confirmation.

### AC-CHECKOUT-008 – Successful Order

After successful checkout, the application should provide confirmation that the order has been placed.

---

## 7. Invoice

### AC-INVOICE-001 – Invoice Generation

After a successful order, an invoice should be generated and made available to the user.

### AC-INVOICE-002 – Invoice Accessibility

The user should be able to navigate to the invoice section and open the generated invoice.

### AC-INVOICE-003 – Invoice Number

The invoice should contain a valid invoice/order reference number.

### AC-INVOICE-004 – Customer Details

The invoice should display the correct customer details associated with the order.

### AC-INVOICE-005 – Product Details

The invoice should display the correct product name and product information.

### AC-INVOICE-006 – Quantity

The invoice should display the quantity purchased for each product correctly.

### AC-INVOICE-007 – Unit Price

The invoice should display the correct unit price for each product.

### AC-INVOICE-008 – Line Total

The invoice line total should be calculated correctly based on product price and quantity.

### AC-INVOICE-009 – Order Total

The invoice order total should match the total calculated during checkout.

### AC-INVOICE-010 – Invoice Consistency

Invoice information should match the corresponding placed order.

---

## 8. Logout

### AC-LOGOUT-001 – Successful Logout

A logged-in user should be able to log out successfully.

### AC-LOGOUT-002 – Authentication State

After logout, the user should no longer have access to authenticated-only functionality.

### AC-LOGOUT-003 – Session/Token Invalidation

After logout, previously valid authentication credentials or tokens should not provide access to protected functionality where applicable.

---

## 9. Login API

### AC-API-LOGIN-001 – Valid Login

The login API should authenticate a user when valid credentials are provided.

### AC-API-LOGIN-002 – Invalid Login

The login API should reject invalid credentials and return an appropriate error response.

### AC-API-LOGIN-003 – Missing Login Data

The login API should validate required fields and reject incomplete requests.

---

## 10. Registration API

### AC-API-REG-001 – Valid Registration

The registration API should create a new user when valid registration data is provided.

### AC-API-REG-002 – Duplicate Registration

The registration API should reject registration when the email address already exists.

### AC-API-REG-003 – Invalid Registration Data

The registration API should reject invalid or incomplete registration data with an appropriate error response.

---

## 11. Cart API

### AC-API-CART-001 – Valid Cart Creation

The cart API should create a cart successfully when valid product and quantity information is provided.

### AC-API-CART-002 – Invalid Product

The cart API should reject requests containing an invalid or unavailable product.

### AC-API-CART-003 – Invalid Quantity

The cart API should reject invalid product quantities.

---

## 12. Logout API

### AC-API-LOGOUT-001 – Successful Logout

The logout API should invalidate the user's authenticated session/token where applicable.

### AC-API-LOGOUT-002 – Protected Request After Logout

A request requiring authentication should be rejected when it uses an invalidated authentication token.

---

## 13. General Application Criteria

### AC-GENERAL-001 – Navigation

Users should be able to navigate between the major application pages without unexpected errors.

### AC-GENERAL-002 – Error Handling

The application should display meaningful validation or error messages when an operation cannot be completed.

### AC-GENERAL-003 – Data Consistency

Data displayed across product, cart, checkout and invoice pages should remain consistent throughout the user journey.

### AC-GENERAL-004 – Order Data Consistency

Product, quantity, price and total information should remain consistent from the cart through checkout and invoice generation.

### AC-GENERAL-005 – Authentication

Authenticated-only functionality should be accessible only to logged-in users.