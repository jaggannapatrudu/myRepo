// @ts-check
// @ts-ignore
const { defineConfig, devices, firefox } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Directory where your test files are located
  //testIgnore: './tests/excluded', // Directory to ignore tests
  //testMatch: '*.spec.js', // Pattern to match test files
  timeout: 500 * 1000, // Max time each test can run (30s)
  expect: {
    timeout: 5000, // Timeout for expect() conditions
  },
  fullyParallel: false, // Run tests in parallel
  forbidOnly: !!process.env.CI, // Fail if test.only is left in code
  retries: process.env.CI ? 1 : 0, // Retry failed tests in CI
  //workers: process.env.CI ? 1 : undefined, // Number of workers
  workers:1,
  reporter: [ // Console output
    ['html']
  ],

  use: {
    baseURL: 'https://bms-cartrems-sit.pegacloud.net', // Replace with your AUT URL
    //browserName: 'chromium',
    headless: false,
    browserName: 'chromium',
    trace: 'off', // Capture trace only on first retry
    screenshot: 'on',
    video: 'retain-on-failure',
   // viewport: {width:1280,height:720},
    ignoreHTTPSErrors: true,
    //browserName:'firefox'
  },
  //grep:[new RegExp('@smoke')],
  /* Configure projects for major browsers */
  //grep:[new RegExp('@Smoke|@Regression')],
  







/* Folder for test artifacts like screenshots, videos, traces, etc. */
  outputDir: 'test-results/',

  /* Run local dev server before starting tests (optional) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
