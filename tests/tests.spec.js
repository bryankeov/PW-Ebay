import { test, expect } from "@playwright/test"

test.beforeEach(async({page}) => {
    await page.goto("https://www.ebay.com.au/")
})

test.describe("Testing page load and navigation", async() => {
    test("Title is visible", async({page}) => {
        await expect(page.locator("#ebayLogoTitle")).toContainText("eBay Home")
    })

    test("Navigating to sell", async ({page}) => {
        await page.pause
        await page.locator("a.gh-p").click()
        expect("h2.textual-display").toContainText("Why eBay?")
    })

    test("Navigating to help", async ({page}) => {
        await page.pause
        await page.locator("li.gh-t").click()
        expect("h1#srTil").toContainText("How can we help you today?")
    })
})