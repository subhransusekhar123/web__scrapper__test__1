const puppeteer = require('puppeteer');

async function scrapeEmailsUsingPuppeteer(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const bodyText = await page.evaluate(() => document.body.innerText);

    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const emails = new Set();

    let match;
    while (match = emailRegex.exec(bodyText)) {
        emails.add(match[0]);
    }

    await browser.close();
    return Array.from(emails);
}

// Example usage
scrapeEmailsUsingPuppeteer('https://example.com').then(emails => {
    console.log('Emails found:', emails);
});