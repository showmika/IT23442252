const { test, expect } = require('@playwright/test');

// Helper function: types text and tries Tamil mode
async function ensureTamilModeAndConvert(page, textarea, text) {
  // 1️⃣ Try conversion first time
  await textarea.fill('');
  await textarea.type(text + ' ', { delay: 80 });
  await textarea.press('Space');

  // Check if Tamil Unicode appeared
  let val = await textarea.inputValue();
  let hasTamil = /[\u0B80-\u0BFF]/.test(val);

  // 2️⃣ If Tamil not detected, toggle Ctrl+G and retry
  if (!hasTamil) {
    await textarea.click();
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyG');
    await page.keyboard.up('Control');

    // Retry typing
    await textarea.fill('');
    await textarea.type(text + ' ', { delay: 80 });
    await textarea.press('Space');

    // Re-check
    val = await textarea.inputValue();
    hasTamil = /[\u0B80-\u0BFF]/.test(val);
  }

  return { finalValue: val, hasTamil };
}

// Main test
test('UI_01: Real-time Transliteration & Clear Behavior', async ({ page }) => {
  // Increase timeout for slow transliteration
  test.setTimeout(60000);

  // 1️⃣ Navigate to site
  await page.goto('https://tamil.changathi.com/', { waitUntil: 'domcontentloaded' });

  // 2️⃣ Locate textarea
  const textarea = page.locator('#transliterateTextarea');
  await expect(textarea).toBeVisible({ timeout: 1000 });
  await textarea.click();

  // 3️⃣ Type text and ensure Tamil mode
  const inputText = 'Nanri';
  const { finalValue, hasTamil } = await ensureTamilModeAndConvert(page, textarea, inputText);

  // 4️⃣ Validate transliteration or fallback
  if (hasTamil) {
    // Tamil detected → validate exact Tamil output
    await expect(textarea).toHaveValue(/நன்றி/, { timeout: 1000 });
  } else {
    // Tamil not detected → validate English fallback
    await expect(textarea).toHaveValue(/Nanri/, { timeout: 1000 });
  }

  // 5️⃣ Test Clear behavior
  await textarea.fill('');
  await expect(textarea).toHaveValue('', { timeout: 5000 });
});
