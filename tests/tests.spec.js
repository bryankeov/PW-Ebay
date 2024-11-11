import { test, expect } from "@playwright/test"

test.beforeEach(async({page}) => {
    await page.goto("https://www.ebay.com.au/")
})

test.describe("Testing page load and navigation", async() => {
    test("Title is visible", async({page}) => {
        await expect(page.locator("#ebayLogoTitle")).toContainText("eBay Home")
    })

    test("")
})