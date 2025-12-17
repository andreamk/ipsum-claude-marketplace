#!/usr/bin/env node

const puppeteer = require('puppeteer');

async function inspectStyles(url, selector, properties = null, computed = false) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    const result = await page.evaluate((sel, props, useComputed) => {
      const element = document.querySelector(sel);
      if (!element) {
        return { error: `Selector "${sel}" not found on page` };
      }

      let styles = {};

      if (useComputed) {
        const computedStyles = window.getComputedStyle(element);
        if (props) {
          // Return only requested properties
          props.forEach(prop => {
            const value = computedStyles.getPropertyValue(prop.trim());
            if (value) {
              styles[prop.trim()] = value;
            }
          });
        } else {
          // Return all computed styles
          for (let i = 0; i < computedStyles.length; i++) {
            const prop = computedStyles[i];
            styles[prop] = computedStyles.getPropertyValue(prop);
          }
        }
      } else {
        // Return inline styles
        const inlineStyle = element.style;
        if (props) {
          props.forEach(prop => {
            const value = inlineStyle.getPropertyValue(prop.trim());
            if (value) {
              styles[prop.trim()] = value;
            }
          });
        } else {
          for (let i = 0; i < inlineStyle.length; i++) {
            const prop = inlineStyle[i];
            styles[prop] = inlineStyle.getPropertyValue(prop);
          }
        }
      }

      return { selector: sel, styles };
    }, selector, properties, computed);

    if (result.error) {
      throw new Error(result.error);
    }

    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Parse arguments
const args = process.argv.slice(2);
const computedFlag = args.includes('--computed');
const filteredArgs = args.filter(arg => arg !== '--computed');

const [url, selector, propertiesArg] = filteredArgs;

if (!url || !selector) {
  console.error('Usage: style-inspector.js <url> <selector> [properties] [--computed]');
  console.error('  properties: comma-separated CSS properties (e.g., "font-size,color")');
  console.error('  --computed: return computed styles instead of inline styles');
  process.exit(1);
}

const properties = propertiesArg ? propertiesArg.split(',') : null;

inspectStyles(url, selector, properties, computedFlag);
