# Image Preview Test

This folder holds a small Playwright script that loads a PNG preview page, uploads a test image, verifies that the preview is shown and takes a screenshot.

## What it does

 Navigates to the page `https://www.pixelssuite.com/convert-to-png` by default.
 Uploads a PNG file.
 Detects the preview on the page.
 Takes a screenshot in the `results/` directory.
 Prints the results to the terminal.

## Files

 `image_preview_test.py` - test script.
 `sample.png` - default image to check the upload.
 `results/` - screenshots to be saved.

## Run it

```powershell python image_preview_test.py -a "https://www.pixelssuite.com/convert-to-png" -s 2000 ```

## Useful options

 `--png` changes the input image.
 `--out-dir` sets a different output directory.
 `--headless` starts the browser in headless mode.
 `--timeout-ms` adjusts the wait time.
 `--slow-mo-ms` Slows down the browser for better viewing.

## Output

The results are a pass or fail message and a screenshot in a file like `results/preview_pass.png` or `results/preview_fail.png`.