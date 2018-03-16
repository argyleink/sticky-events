
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1024,
    height: 768,
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  await page.evaluate(() => {
    window.scrollTo(0, 500);
  });

  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
