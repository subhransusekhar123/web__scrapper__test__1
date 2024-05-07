const axios = require('axios');
const cheerio = require('cheerio');



async function dataAfterScrapingWebs(url) {
    
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const bodyText = $('body').text();
        // Regular expression to match email addresses
        const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
        const emails = new Set(); // Using a set to avoid duplicates

        let match;
        while (match = emailRegex.exec(bodyText)) {
            emails.add(match[0]);
        }

        console.log(Array.from(emails));
        console.log(`Data scraped successfully from ${url}`);
    } catch (error) {
        // Handle different types of errors
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error(`Error fetching data from ${url}. Status code: ${error.response.status}`);
        } else if (error.request) {
            // The request was made but no response was received
            console.error(`Error fetching data from ${url}. No response received.`);
        } else {
            // Other errors
            console.error(`Error fetching data from ${url}:`, error.message);
        }
    }
}



module.exports = dataAfterScrapingWebs ;

