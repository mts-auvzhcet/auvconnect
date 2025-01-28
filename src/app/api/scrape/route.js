import puppeteer from "puppeteer"

export async function GET(req) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto("https://milaap.org/fundraisers/support-us-to-participate-in-singapore-auv-challenge-2025")
    await page.waitForSelector("#donate-section > div.sticky-progress-section > div.amount-section > div.raised-amount > div.amount")
    const amount = await page.$("#donate-section > div.sticky-progress-section > div.amount-section > div.raised-amount > div.amount")
    const amountText = await amount.evaluate(el => el.textContent)
    await browser.close()
    const amountNumber = amountText.replace(/[^0-9]/g, '')
    return new Response(amountNumber, { status: 200 })
}