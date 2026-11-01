// Wakes Streamlit Community Cloud apps with a real browser session.
// A plain HTTP GET returns 200 even when an app is asleep, so it never
// counts as activity: Streamlit only resets the idle timer for a live
// browser/WebSocket session, and a sleeping app needs its wake button clicked.
import { chromium } from "@playwright/test";

const APPS = {
  "cancer-detection": "https://cancer-detection-application.streamlit.app/",
  "gender-sentiment":
    "https://gender-classification-text-sentiment-analysis-bprfgtyn4pfjc2hb.streamlit.app/",
};

const WAKE_BUTTON = /get this app back up/i;
const BOOT_TIMEOUT_MS = 180_000;

async function wake(browser, name, url) {
  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });

    const button = page.getByRole("button", { name: WAKE_BUTTON });
    const asleep = await button
      .waitFor({ state: "visible", timeout: 15_000 })
      .then(() => true)
      .catch(() => false);

    if (asleep) {
      console.log(`${name}: asleep, clicking wake button`);
      await button.click();
      await button.waitFor({ state: "detached", timeout: BOOT_TIMEOUT_MS });
    }

    // The app itself renders inside an iframe on *.streamlit.app.
    const app = page.frameLocator("iframe").first();
    await app
      .locator('[data-testid="stApp"], [data-testid="stAppViewContainer"]')
      .first()
      .waitFor({ timeout: BOOT_TIMEOUT_MS });

    // Hold the session open briefly so it registers as real activity.
    await page.waitForTimeout(10_000);
    console.log(`${name}: awake${asleep ? " (was asleep)" : ""}`);
    return true;
  } catch (err) {
    console.error(`${name}: FAILED - ${err.message}`);
    await page
      .screenshot({ path: `keep-alive-${name}.png`, fullPage: true })
      .catch(() => {});
    return false;
  } finally {
    await page.close();
  }
}

const browser = await chromium.launch();
const results = await Promise.all(
  Object.entries(APPS).map(([name, url]) => wake(browser, name, url)),
);
await browser.close();

if (results.includes(false)) process.exit(1);
