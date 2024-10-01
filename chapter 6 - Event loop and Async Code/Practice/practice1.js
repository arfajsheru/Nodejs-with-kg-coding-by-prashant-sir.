const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('1. Start of script');

    console.log('2. Reading file synchronously');
    const dataSync = fs.readFileSync('user-details.txt', 'utf-8');
    console.log('3. synchrounous read complete');

    console.log('4. Reading file aynchronously');
    fs.readFile('user-details.txt', 'utf-8', (err, dataAsync) => {
        if(err) throw err;
        console.log('6. Asynchronous read complete');
    });
    console.log('5.End of script')
    res.end();
});

const PORT=8000;
server.listen(PORT, () => {
    console.log(`server strted port: http://localhost:${PORT}`);
});