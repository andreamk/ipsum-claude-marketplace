#!/usr/bin/env node

const puppeteer = require('puppeteer');

async function readDOM(url, selector = null) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    let html;
    if (selector) {
      const element = await page.$(selector);
      if (!element) {
        throw new Error(`Selector "${selector}" not found on page`);
      }
      html = await page.$eval(selector, el => el.outerHTML);
    } else {
      html = await page.content();
    }

    console.log(html);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

const [,, url, selector] = process.argv;

if (!url) {
  console.error('Usage: read-dom.js <url> [selector]');
  process.exit(1);
}

readDOM(url, selector);
