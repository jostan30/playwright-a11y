# ecommerce-pw-test

End-to-end tests for the demo storefront [https://ecommercebs.vercel.app/](https://ecommercebs.vercel.app/), written with [Playwright](https://playwright.dev/) and runnable locally or on the [BrowserStack](https://www.browserstack.com/) cloud via the `browserstack-node-sdk`.

## What's covered

| Spec | Description |
| --- | --- |
| `tests/add-to-cart.spec.js` | Opens a product (Heritage Denim Jacket) from the home page and adds it to the cart. |
| `tests/add-to-cart-categories.spec.js` | Data-driven: adds a product to the cart from the **Men**, **Women**, **Sale** and **Offers** categories. |

Each test asserts that the cart badge in the header shows `1` after adding the product.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (includes npm)
- A [BrowserStack account](https://www.browserstack.com/users/sign_up) (only needed for cloud runs)

## Getting started

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd ecommerce-pw-test

# 2. Install dependencies
npm install

# 3. Install Playwright browsers (first time only)
npx playwright install
```

## Running tests locally

```bash
# Run all tests (headless Chromium)
npx playwright test

# Run a single spec
npx playwright test tests/add-to-cart.spec.js

# Run headed (watch the browser)
npx playwright test --headed

# Open the HTML report after a run
npx playwright show-report
```

## Running tests on BrowserStack

1. Get your **Username** and **Access Key** from your [BrowserStack Account Settings](https://www.browserstack.com/accounts/settings).
2. Export them as environment variables (never commit them):

   ```bash
   export BROWSERSTACK_USERNAME="<your-username>"
   export BROWSERSTACK_ACCESS_KEY="<your-access-key>"
   ```

3. Run the tests through the BrowserStack SDK:

   ```bash
   npx browserstack-node-sdk playwright test
   ```

4. View results on the [BrowserStack Automate dashboard](https://automate.browserstack.com/) under the project **ecommerce-pw-test**.

### Configuration

Cloud settings live in [`browserstack.yml`](browserstack.yml):

- `platforms` – OS / browser combinations to run on (default: macOS Big Sur, latest Chrome)
- `parallelsPerPlatform` – number of parallel sessions per platform
- `projectName`, `buildName`, `buildIdentifier` – how builds are grouped in the dashboard
- `testReporting`, `accessibility` – enable Test Reporting & Accessibility checks
- `debug`, `networkLogs`, `consoleLogs` – debugging options

Local run settings (test directory, headless mode) live in [`playwright.config.js`](playwright.config.js).

## Project structure

```
.
├── tests/                          # Playwright spec files
│   ├── add-to-cart.spec.js
│   └── add-to-cart-categories.spec.js
├── playwright.config.js            # Playwright configuration
├── browserstack.yml                # BrowserStack SDK configuration
├── package.json
└── README.md
```

## Troubleshooting

- **Browsers not found** – run `npx playwright install`.
- **BrowserStack authentication error** – confirm `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` are exported in the same shell session.

## License

ISC
