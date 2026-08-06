import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async login(email: string, password: string) {
    await this.page.getByRole('link', { name: 'Sign in' }).click();

    await this.page.getByPlaceholder('Your email').fill(email);

    await this.page.getByPlaceholder('Your password').fill(password);

    await this.page.getByRole('button', { name: 'Login' }).click();
  }

}