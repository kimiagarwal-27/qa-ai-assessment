# AI Prompts – Requirements and Planning

## Prompt

## Objective
Analyze Practice Software Testing Toolshop and identify all major user flows and risks from a QA perspective.

## AI Response Summary

### Functional Modules

1. User Registration
2. User Login & Logout
3. Product Listing
4. Product Search
5. Product Filtering & Sorting
6. Product Details
7. Shopping Cart
8. Checkout
9. Invoice Generation
10. User Profile
11. Order History / My Invoices

---

### Major User Flows

#### Flow 1 – User Registration

- Navigate to Registration page
- Enter valid user details
- Submit registration
- Verify successful account creation

#### Flow 2 – Login

- Enter registered email
- Enter password
- Login successfully
- Verify user profile

#### Flow 3 – Browse Products

- Open homepage
- Browse product categories
- View products

#### Flow 4 – Search Product

- Search using product name
- Verify matching products are displayed

#### Flow 5 – Product Details

- Open product page
- Verify product information
- Verify price and stock

#### Flow 6 – Shopping Cart

- Add product to cart
- Update quantity
- Remove product
- Verify cart total

#### Flow 7 – Checkout

- Proceed to checkout
- Enter billing information
- Select Cash on Delivery
- Confirm order

#### Flow 8 – Invoice Generation

- Complete checkout
- Press Confirm (twice if required)
- Verify invoice creation
- Verify invoice under "My Invoices"

#### Flow 9 – Logout

- Logout successfully
- Verify session ends

---

## Business Risks

### High Risk

- User cannot login
- Registration fails
- Checkout fails
- Invoice not generated
- Payment flow breaks
- Incorrect cart calculation

### Medium Risk

- Search returns incorrect products
- Quantity update incorrect
- Remove product fails
- User profile not updated
- Order history incorrect

### Low Risk

- UI alignment issues
- Image loading issues
- Broken hyperlinks
- Minor validation messages

---

## Smoke Test Scenarios

1. Register user
2. Login
3. Search product
4. Add product to cart
5. Checkout
6. Generate invoice
7. Logout

---

## Regression Test Scenarios

1. Invalid registration
2. Invalid login
3. Empty search
4. Filter products
5. Sort products
6. View product details
7. Update cart quantity
8. Remove product
9. Empty cart
10. Checkout validation
11. Invoice verification
12. Order history verification

---

## Edge Cases

- Invalid email format
- Weak password
- Duplicate registration
- Empty login fields
- Search with special characters
- Search with no results
- Large product quantity
- Remove all products from cart
- Refresh browser during checkout
- Browser back during payment
- Network interruption during checkout
- Invoice generation after page refresh

---

## Test Data Requirements

### Valid Users

- New customer
- Existing customer

### Invalid Users

- Invalid email
- Wrong password
- Blank credentials

### Products

- Single product
- Multiple products
- Different categories

### Checkout

- Valid billing details
- Invalid billing details
- Missing mandatory fields

### Payment

- Cash on Delivery

---

## Risks to Validate During Testing

- Session management
- Authentication
- Cart calculation
- Invoice generation
- Data persistence
- API response validation
- Error handling
- Input validation
- UI responsiveness
- Cross-browser compatibility

---

## Validation Notes

- Manually explored the application.
- Verified the main user journey:
  Registration → Login → Product Search → Add to Cart → Checkout → Invoice → Logout.
- Identified the key smoke and regression scenarios for automation.