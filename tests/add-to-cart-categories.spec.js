const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://ecommercebs.vercel.app/';

const cases = [
  { category: 'Men', image: 'Polo Shirt', product: 'Polo Shirt', price: '59.99' },
  { category: 'Women', image: 'Cashmere Cardigan', product: 'Cashmere Cardigan' },
  { category: 'Sale', image: 'Wide-Leg Pants', product: 'Wide-Leg Pants', price: '139.99' },
  { category: 'Offers', image: 'Wide-Leg Pants', product: 'Wide-Leg Pants', price: '139.99' },
];

for (const { category, image, product, price } of cases) {
  test(`add a product to the cart from ${category}`, async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByRole('banner').getByRole('button', { name: category, exact: true }).click();
    await page.getByRole('img', { name: image, exact: true }).first().click();
    await expect(page.getByRole('heading', { name: product, level: 1 })).toBeVisible();

    const addToCart = page.getByRole('button', { name: price ? `Add to Cart - $${price}` : /^Add to Cart/ });
    await addToCart.click();

    await expect(page.getByRole('banner').getByRole('button', { name: '1', exact: true })).toBeVisible();
  });
}
