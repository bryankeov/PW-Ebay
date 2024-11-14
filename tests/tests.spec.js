import { test, expect } from "@playwright/test"
import { text } from "stream/consumers"

test.beforeEach(async({page}) => {
    await page.goto("https://www.ebay.com.au/")
})

test.describe("Testing page load and navigation", async() => {
    test("Title is visible", async({page}) => {
        await expect(page.locator("#ebayLogoTitle")).toContainText("eBay Home")
    })

    test("Navigating to sell", async ({page}) => {
        await page.locator(`a[_sp="m570.l1528"]`).click()
        await expect(page.getByText("Turn your passion into profit")).toBeVisible()
    })

    test("Navigating to help", async ({page}) => {
        await page.locator(`a[_sp="m570.l1545"]`).click()
        await expect(page.getByText("How can we help you today?")).toBeVisible()
    })
})

test.describe("Test search function", async () => {
    test("Search for hat", async ({page}) => {
        await page.locator(`input#gh-ac`).fill("hat")
        await page.getByRole('button', { name: 'Search' }).click()
        await expect(page.getByText("results for hat")).toBeVisible()
    })
})