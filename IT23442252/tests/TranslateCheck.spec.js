const { test } = require('@playwright/test');
const { time } = require('node:console');
 
const colors = {
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  red: (text) => `\x1b[31m${text}\x1b[0m`,
};
 
// Helper: type word by word with space
async function typeWithSpaces(textarea, sentence) {
  const words = sentence.split(' ');
  for (const word of words) {
    await textarea.type(word + ' ', { delay: 350 }); // small delay helps AI process
  }
}
 
test('Tamil Transliteration - Sequential Tests', async ({ page }) => {
  test.setTimeout(600000);
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
 
  const tests = [
  { input: 'Eppidi Irukurenga?', expected: 'எப்பிடி இருக்குறீங்க? ' },
  { input: 'Indaiku velai irukku', expected: 'இண்டைக்கு வேலை இருக்கு ' },
  { input: 'Naan veeduku pokiren', expected: 'நான் வீட்டுக்கு போகிறேன் ' },
  { input: 'thankyou friend', expected: 'தங்கியூ friend ' },
  { input: 'Akkakku Monday 10 manikku interview irukku', expected: 'அக்காக்கு Monday 10  மணிக்கு interview இருக்கு ' },
  { input: 'Thambi velaiyada poraan', expected: 'தம்பி விளையாட போறான் ' },
  { input: 'Phone charge aakiddu irukku', expected: 'போன் சார்ஜ் ஆகிட்டு இருக்கு ' },
  { input: 'Enaku 3 manikku train naan early aa pokanum', expected: 'எனக்கு 3 மணிக்கு train நான் ஏர்லி ஆ போகணும் ' },
 {
    input: 'Avan muyanrathal vetri vandhathu',
    expected: 'அவன் முயன்றதால் வெற்றி வந்தது ',
  },
  {
    input: 'Naalaiku exam iruku athukaga ready pannuren',
    expected: 'நாளைக்கு எக்ஸாம் இருக்கு அதுக்காக ரெடி பண்ணுறேன் ',
  },
  {
    input: 'Nanga ellarum 12 manikku restaurant kku sappida pogalama?',
    expected: 'நாங்க எல்லாரும் 12 மணிக்கு ரெஸ்டூரண்ட்க்கு சாப்பிட போகலாமா? ',
  },
  {
    input: 'Avan eppa velai seithukondu irukkaan',
    expected: 'அவன் எப்ப வேலை செய்துகொண்டு இருக்கான் ',
  },
  {
    input: 'Naan puthu phone vankinaan',
    expected: 'நான் புது போன் வாங்கினான் ',
  },
  {
    input: 'Avan nallaa thoongittu irukkaan',
    expected: 'அவன் நல்லா தூங்கிட்டு இருக்கான் ',
  },

  {
    input:
      'Mama 50$ anuppi irukkaar',
    expected:
      'மாமா 50$ அனுப்பி இருக்கார் ',
  },

  {
    input:
      'Saapadu innum thayar aagala',
    expected:
      'சாப்பாடு இன்னும் தயார் ஆகல ',
  },

    {
    input:
      'En friend nallaa padichavan athaala nalla marks vanthathu',
    expected:
      'என் friend நல்லா படிச்சவன் அதால நல்ல மார்க்ஸ் வந்தது ',
  },

   {
    input:
      'Enaku indaiku sariyana velai irukku',
    expected:
      'எனக்கு இண்டைக்கு சரியான வேலை இருக்கு ',
  },

  {
    input:
      'Nee thirumba varum varaikum naan inga wait pannuren',
    expected:
      'நீ திரும்ப வரும் வரைக்கும் நான் இங்க வெயிட் பண்ணுறேன் ',
  },

  {
    input:
      'Enaku 1000 roobai tharamudeumaa?',
    expected:
      'எனக்கு 1000 ரூபாய் தரமுடியுமா? ',
  },

  {
    input:
      'Nanga naalaiku koyiluku povom',
    expected:
      'நாங்க நாளைக்கு கோயிலுக்கு போவோம் ',
  },

   {
    input:
      'Enaku udambu sari illaathathaala ennala office ku varamudiyaathu',
    expected:
      'எனக்கு உடம்பு சரி இல்லாததால என்னால ஆபீஸ் கு வரமுடியாது ',
  },

  {
    input:
      'Enaku sapadu venam',
    expected:
      'எனக்கு சாப்பாடு வேணாம் ',
  },

   {
    input:
      'Mazhai endaal naama velila pokamudeyaathu',
    expected:
      'மழை எண்டால் நாம வெளில போகமுடியாது ',
  },

  {
    input:
      'Nee aarokiyamaa saapidanum illanaa varutham vanthidum',
    expected:
      'நீ ஆரோக்கியமா சாப்பிடணும் இல்லனா வருத்தம் வந்திடும் ',
  },

  {
    input:
      'Enaku tea romba pidikum',
    expected:
      'எனக்கு டி ரொம்ப பிடிக்கும் ',
  },

   {
    input:
      'Ungada veedu enga irukku?',
    expected:
      'உங்கட வீடு எங்க இருக்கு? ',
  },

  {
    input:
      'Niraya velai irukirathala ennala indaiku varamudeya naan weekend anga varan',
    expected:
      'நிறைய வேலை இருக்கிறதால என்னால இண்டைக்கு கிளிநொச்சி வரமுடியா நான் வீகெண்ட்ல அங்க வாறன்  ',
  },

  {
    input:
      'En thaathaa vayal seithavar',
    expected:
      'என் தாத்தா வயல் செய்தவர் ',
  },

  {
    input:
      'Eesal varappokuthu kathavai moodunga',
    expected:
      'ஈசல் வரப்போகுது கதவை மூடுங்க ',
  },

   {
    input:
      'Ava tried aa irunthaa athaala seekkiram thoonga poitta',
    expected:
      'அவ tried ஆ இருந்தா அதால சீக்கிரம் தூங்க போய்ட்டா ',
  },

  {
    input:
      'Naan solluratha kelunga',
    expected:
      'நான் சொல்லுறத கேளுங்க ',
  },

   {
    input:
      'En laptop work aakuthu illai',
    expected:
      'என் லேப்டாப் work ஆகுது இல்லை ',
  },

  {
    input:
      'Bike start aakathathaal time kku pogamudeyala',
    expected:
      'பைக் ஸ்டார்ட் ஆகாததால் time க்கு போகமுடியல ',
  },

];
 
  for (let i = 0; i < tests.length; i++) {
    const { input, expected } = tests[i];
 
    // Clear textarea
    await textarea.fill('');
 
    // Type word by word with space to trigger Tamil transliteration
    await typeWithSpaces(textarea, input);
 
    // Wait until AI transliteration produces Tamil text
    await page.waitForFunction(
      (selector, originalText) => {
        const ta = document.querySelector(selector);
        // Wait until it contains at least one Tamil character
        return ta && /[\u0B80-\u0BFF]/.test(ta.value);
      },
      '#transliterateTextarea',
      input
    );
 
    // Get the output
    const output = await textarea.inputValue();
 
    if (output.includes(expected)) {
      console.log(colors.green(`✅ Pos_Fun ${i + 1} Passed: "${input}" | Output: "${output}"`));
    } else {
      console.log(
        colors.red(
          `❌ Neg_Fun ${i + 1} Failed: "${input}" | Output: "${output}" | Expected contains: "${expected}"`
        )
      );
    }
 
    // Clear textarea for next test
    await textarea.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
 
  }
});