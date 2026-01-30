# Tamil Transliteration Test Suite

This project contains automated tests for validating Tamil transliteration functionality using Playwright.

## Project Overview

The test suite validates that English text is correctly transliterated into Tamil script using the website `https://tamil.changathi.com/`.

## Project Structure

```
.
├── tests/
│   └── pos.spec.js           # Playwright test file with 2 test cases
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
├── playwright-report/        # Test reports (generated after test run)
├── test-results/             # Test results (generated after test run)
└── README.md                 # This file
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

### Run tests with browser UI (headed mode):
```bash
npx playwright test --headed
```

### Run tests in background (headless mode):
```bash
npx playwright test
```

### Run tests on specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### List all available tests:
```bash
npx playwright test --list
```

## Test Cases

### Test 1: Pos_Fun_01 - Tamil Transliteration Test
- **Input:** `Eppidi irukurenga`
- **Expected Output:** `எப்பிடி இருக்குறீங்க?`
- **Status:** ✅ PASSING

### Test 2: Pos_Fun_02 - Tamil Transliteration Test
- **Input:** `Nanga Indaiku maniku hotel povama?`
- **Expected Output:** `நாங்க இண்டைக்கு மணிக்கு ஹோட்டல் போவமா?`
- **Status:** ❌ FAILING
- **Issue:** Output mismatch - received `நாங்க இண்டைக்கு மணிக்கு ஹோட்டல் பாவமா? ` (different character + trailing space)

## Test Results

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Notes

- Tests run on 3 browsers by default: Chromium, Firefox, and WebKit
- Total of 6 tests (2 test cases × 3 browsers)
- Each test waits 3 seconds for transliteration to complete
- Tests include type delay of 100ms for realistic typing

## Troubleshooting

### Test 2 Failure
The second test is failing due to transliteration output mismatch. The website returns a different character variant than expected. Review and update the expected regex pattern if needed.

## Configuration

Browser configuration is defined in `playwright.config.js`. To disable browsers, comment out entries in the `projects` array.

## Author

IT23442252

## Last Updated

January 29, 2026
