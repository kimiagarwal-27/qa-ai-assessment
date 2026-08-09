import { Page } from '@playwright/test';
import user from '../test-data/user.json';

export class Register {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto(user.url);

    }

    async clickRegister() {
        await this.page.locator('[data-test="nav-sign-in"]').click();
        await this.page.getByText('Register').click();
    }

    async registerUser(
        firstName: string,
        lastName: string,
        dob: string,
        postcode: string,
        houseNo: string,
        streetName: string,
        city: string,
        state: string,
        phone: string,
        email: string,
        password: string
    ) {

        await this.page.locator('[data-test="first-name"]').fill(firstName);

        await this.page.locator('[data-test="last-name"]').fill(lastName);

        await this.page.locator('[data-test="dob"]').fill(dob);

        await this.page.locator('[data-test="country"]').click();
        await this.page.locator('input[name="India"]').click();
        

        await this.page.locator('[data-test="postal_code"]').fill(postcode);

        await this.page.locator('[data-test="house_number"]').fill(houseNo);

        await this.page.locator('[data-test="street"]').fill(streetName);

        await this.page.locator('[data-test="city"]').fill(city);
        await this.page.locator('[data-test="state"]').fill(state);


        await this.page.locator('[data-test="phone"]').fill(phone);

        await this.page.locator('[data-test="email"]').fill(email);

        await this.page.locator('[data-test="password"]').fill(password);

        await this.page.locator('[data-test="register-submit"]').click();
        
    }

}