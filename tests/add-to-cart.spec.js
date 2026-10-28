const { test, expect } = require('@playwright/test');

test('add a product to the cart', async ({ page }) => {
  await page.goto('https://ecommercebs.vercel.app/');

  await page.getByRole('heading', { name: 'Heritage Denim Jacket' }).click();
  await expect(page.getByRole('heading', { name: 'Heritage Denim Jacket', level: 1 })).toBeVisible();

  await page.getByRole('button', { name: 'Add to Cart - $159.99' }).click();

  await expect(page.getByRole('banner').getByRole('button', { name: '1', exact: true })).toBeVisible();
});
