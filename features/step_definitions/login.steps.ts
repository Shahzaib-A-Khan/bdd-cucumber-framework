import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the saucedemo login page', async function (this: CustomWorld) {
  await this.page.goto('https://www.saucedemo.com/');
});

When('I log in as {string} with password {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.page.locator('[data-test="username"]').fill(username);
  await this.page.locator('[data-test="password"]').fill(password);
  await this.page.locator('[data-test="login-button"]').click();
});

Then('I should see the products page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/inventory/);
});

Then('I should see the login error {string}', async function (this: CustomWorld, text: string) {
  await expect(this.page.locator('[data-test="error"]')).toContainText(text);
});