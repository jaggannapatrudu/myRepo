import { test } from '@playwright/test';


  test('seed', async ({ page }) => {
    await page.goto("https://bms-cartrems-sit.pegacloud.net/prweb/app/default")
    await page.locator('#txtUserID').fill('PegaAdmin');
    await page.locator('#txtPassword').fill('rules');
    await page.locator('#sub').click();
    await page.waitForTimeout(5000);
  });
