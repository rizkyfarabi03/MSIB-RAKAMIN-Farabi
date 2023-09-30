const fs = require ("fs");
const fileInput = './logging.txt';

fs.readFile(fileInput, 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
}); 