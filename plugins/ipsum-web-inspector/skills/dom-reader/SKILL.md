---
name: DOM Reader
description: This skill should be used when needing to extract the rendered HTML from a web page after JavaScript execution, when WebFetch returns incomplete content from SPAs or dynamic sites, when the task requires inspecting the real DOM structure of a URL, or when the user asks to "read the DOM", "get the HTML", "extract HTML from URL", "inspect page content".
version: 1.0.1
---

# DOM Reader

Extract the rendered HTML from a web page after JavaScript execution.

## Overview

This skill provides guidance for extracting the real DOM content from web pages. Unlike static HTML fetching, this captures the DOM after JavaScript has modified it, revealing dynamically loaded content.

## When to Use

- Extract HTML content from JavaScript-heavy pages (SPAs, React, Vue, etc.)
- Get the rendered DOM of a specific element using CSS selectors
- Inspect the actual structure of a page after client-side rendering

## Parameters

- **url** (required): The URL of the page to read
- **selector** (optional): CSS selector to extract specific elements. If omitted, returns the entire page HTML. When provided, returns ALL matching elements.

## Implementation

Use the `scripts/read-dom.js` script with Puppeteer to extract DOM content.

### Pre-execution Check

Before running the script, check if `node_modules` exists in the scripts directory. If not, install dependencies:

```bash
# Check and install if needed
[ -d "scripts/node_modules" ] || (cd scripts && npm install)
```

### Basic Usage

To read the entire page:
```bash
node scripts/read-dom.js "https://example.com"
```

To read all elements matching a selector:
```bash
node scripts/read-dom.js "https://example.com" "h2"
```

To read a specific element by ID:
```bash
node scripts/read-dom.js "https://example.com" "#main-content"
```

### Script Location

The script is located at `scripts/read-dom.js` within this skill directory.

## Output

Returns the HTML string of the requested content:
- Full page: Complete document HTML
- With selector: `outerHTML` of ALL matching elements, separated by newlines

## Error Handling

- Invalid URL: Report the URL format error
- Selector not found: Report that the selector matched no elements
- Page load timeout: Report timeout and suggest retrying or checking the URL
- Missing dependencies: Run pre-execution check to install
