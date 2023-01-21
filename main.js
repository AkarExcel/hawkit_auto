// Import puppeteer
const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome'
  });

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto('https://hawkit.ng/#/social/orders/63c6cdcfb08030ac07c6b71f');

  // Query for an element handle.
  const element = await page.waitForSelector('div > .class-name');

  // Do something with element...
  await element.click(); // Just an example.

  // Dispose of handle
  await element.dispose();

  // Close browser.
  await browser.close();
})();