import { test, expect } from '@playwright/test';
import { Register } from '../../pages/RegisterPage';
test('@Smoke User Registration', async ({ page }) => {

    const register = new Register(page);

    await register.navigate();

    await register.clickRegister();

    await register.registerUser(
        'Test', // first name
        'User', // last name
        '1989-11-11', // dob
        '201301', // postal code
        'a-10', // house number
        'XYZ street', // street name
        'Noida', // city
        'UP', // state
        '9876543210', // phone
        `test${Date.now()}@gmail.com`, // email
        'Password@123' // password
    ); 

});