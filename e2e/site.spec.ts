import { expect, test } from "@playwright/test";

const INDUSTRIES = ["healthcare", "energy", "mining", "sports", "digital-transformation"];

// Never hit Streamlit Cloud from tests: slow, flaky, and it is not our code.
test.beforeEach(async ({ page }) => {
  await page.route(/streamlit\.app/, (route) =>
    route.fulfill({ status: 200, contentType: "text/html", body: "<p>demo stub</p>" }),
  );
});

async function expectNoHorizontalScroll(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow, "page should not scroll sideways").toBeLessThanOrEqual(1);
}

test("home page renders hero, sections and CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/VertexMind AI/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("decisions that matter");
  await expect(page.locator("#contact")).toBeAttached();
  await expect(page.getByRole("link", { name: "Start a Conversation" })).toBeVisible();
  await expectNoHorizontalScroll(page);
});

test("industry pages have unique titles and fit the viewport", async ({ page }) => {
  const titles = new Set<string>();
  for (const slug of INDUSTRIES) {
    await page.goto(`/${slug}/`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    titles.add(await page.title());
    await expectNoHorizontalScroll(page);
  }
  expect(titles.size).toBe(INDUSTRIES.length);
});

test("SEO essentials are present", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /og\.png$/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /vertexmindai\.com\.au/);
  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  expect(JSON.parse(jsonLd ?? "{}")["@graph"]).toHaveLength(2);

  for (const path of ["/sitemap.xml", "/robots.txt", "/og.png", "/apple-touch-icon.png"]) {
    expect((await request.get(path)).ok(), path).toBeTruthy();
  }
});

test("demo drawer opens, fills the screen on mobile and closes with Escape", async ({ page, isMobile }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Live Demo" }).first().click();

  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Close demo" })).toBeFocused();

  if (isMobile) {
    const panel = await dialog.locator("> div").nth(1).boundingBox();
    const viewport = page.viewportSize()!;
    expect(panel!.width).toBeGreaterThanOrEqual(viewport.width - 1);
  }

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("mobile menu toggles with correct aria state", async ({ page, isMobile }) => {
  test.skip(!isMobile, "hamburger is mobile only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#mobile-menu")).toBeVisible();
});
