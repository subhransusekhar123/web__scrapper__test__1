const csv = require('csv-parser');
const fs = require('fs');

const results = [] ;
const onlyCompany = [];

const readCsvFileAndProvideJson = (csvFile) => {
    fs.createReadStream(csvFile)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);

    results.forEach((data)=>{
        onlyCompany.push(data.Symbol);
    })
    
    console.log(onlyCompany)
    });
}

module.exports = readCsvFileAndProvideJson;

