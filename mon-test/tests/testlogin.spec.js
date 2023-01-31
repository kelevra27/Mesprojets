const { test, expect } = require('@playwright/test');

test("test de connexion reussi", async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('test');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('1234');
    await page.getByRole('button', { name: 'Se connecter' }).click();
});