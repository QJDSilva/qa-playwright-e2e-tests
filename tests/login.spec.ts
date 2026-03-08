import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Authentication Tests', () => {

  test('should login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

  });

  test('should show error with invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]')).toBeVisible();

  });

});