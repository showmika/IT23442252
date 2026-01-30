# Tamil Transliteration Test Suite

This project contains automated tests for validating Tamil transliteration functionality using Playwright.

## Project Overview

The test suite validates that English text is correctly transliterated into Tamil script using the website `https://tamil.changathi.com/`.

## Project Structure

```
.
├── tests/
│   ├── TranslateCheck.spec.js  # Functional tests for transliteration
│   └── Ui.spec.js              # UI tests for real-time transliteration
├── playwright.config.js        # Playwright configuration
├── package.json                # Project dependencies
├── playwright-report/          # HTML test reports (generated after test run)
├── test-results/               # Test results (generated after test run)
├── test_results.csv            # CSV file with test results summary
└── README.md                   # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Running Tests

### Run all tests in headless mode:
```bash
npx playwright test
```

### Run tests with browser UI (headed mode):
```bash
npx playwright test --headed
```

### Run specific test file:
```bash
npx playwright test TranslateCheck.spec.js
npx playwright test Ui.spec.js
```

### Run tests on specific browser (only Chromium enabled by default):
```bash
npx playwright test --project=chromium
```

### List all available tests:
```bash
npx playwright test --list
```

### View test results:
```bash
npx playwright show-report
```

## Test Cases

### TranslateCheck.spec.js
This file contains functional tests for Tamil transliteration. It performs sequential tests on multiple English sentences to ensure they are correctly transliterated into Tamil script.

- **Test Name:** Tamil Transliteration - Sequential Tests
- **Functionality:** 
  - Navigates to `https://tamil.changathi.com/`
  - Types each test input word by word with delays to simulate real typing
  - Waits for the website's AI to perform transliteration
  - Compares the output against expected Tamil text
  - Logs pass/fail results in the console with color coding
- **Test Data:** Array of 35 test cases with English inputs and expected Tamil outputs
- **Examples:**
  - Input: "Eppidi Irukurenga?" → Expected: "எப்பிடி இருக்குறீங்க? "
  - Input: "Naan veeduku pokiren" → Expected: "நான் வீட்டுக்கு போகிறேன் "

### Ui.spec.js
This file contains UI-focused tests for the transliteration interface.

- **Test Name:** UI_01: Real-time Transliteration & Clear Behavior
- **Functionality:**
  - Navigates to the transliteration website
  - Types a specific English text: "Nanri"
  - Ensures Tamil mode is activated (tries Ctrl+G if needed)
  - Validates that the output contains Tamil characters or falls back to English
  - Tests the clear functionality by emptying the textarea
- **Expected Output:** "நன்றி" (or English fallback)

## Test Results

Latest test results are stored in `test_results.csv`. After running tests, check the HTML report in `playwright-report/index.html`.

## Configuration

- **Browser:** Chromium (Firefox and WebKit are commented out in `playwright.config.js`)
- **Parallel execution:** Enabled
- **Retries:** 2 on CI, 0 locally
- **Tracing:** On first retry

To enable additional browsers, uncomment the respective projects in `playwright.config.js`.

## Troubleshooting

- Ensure internet connection for accessing `https://tamil.changathi.com/`
- Tests may fail if the website's transliteration logic changes
- Increase timeouts if transliteration is slow

## Author

IT23442252

## Last Updated

January 30, 2026