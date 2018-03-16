
const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkd')

module.exports = async function() {
  const browser = await puppeteer.launch();

  // store the browser instance so we can teardown it later

  global.__BROWSER__ = browser;

  // file the wsEndpoint for TestEnvironments

  mkdirp.sync(DIR);

  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};