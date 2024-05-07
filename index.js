const express = require('express')
const app = express();
const readCsvFileAndProvideJson = require("./utils/csv_Reader");
const path = require('path');
const dataAfterScrapingWebs = require('./utils/scrap_website');
//test urls
const allData = [
    'https://openhusk.com',
    'https://iconicwebzone.com',
    'https://www.amazon.com',
];



const csvPath = path.join(__dirname,"ind_niftymidsmallcap400list.csv")
console.log(csvPath);

// readCsvFileAndProvideJson(csvPath);

allData.forEach((data) => {
    dataAfterScrapingWebs(data);
});


app.listen(3000, ()=>{
    console.log('listens at 3000');
})