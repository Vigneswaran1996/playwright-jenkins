import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"

import { chromium, Page, Browser, expect } from "@playwright/test"


setDefaultTimeout(60 * 1000 * 2)

let browser: Browser;
let page: Page;



Given('User navigates to the application',async function () {

  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://bookcart.azurewebsites.net/");
  console.log("successfully logged in");

});

Given('User click on the login link.', async function () {
  await page.locator("//span[text()='Login']").click();
});

Given('User enter the username as {string}', async function (username) {
  await page.locator("//input[@formcontrolname='username']").fill(username)
});

Given('User enter the password as {string}', async function (password) {
  await page.locator("//input[@formcontrolname='password']").fill(password)
});

When('User click on the login button', async function () {

  await page.locator
    ("//button[@class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']//span[text()='Login']").click();
});

Then('Login should be success', async function () {
  let text = await page.locator("//span[@class='mat-button-wrapper'][text()=' vignesh19 ']").textContent();
  console.log(text);
})