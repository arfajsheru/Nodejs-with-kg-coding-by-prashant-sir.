const http = require('http');


const server = http.createServer((req,res) => { 
 console.log('1.Start of scipt')
 
 Promise.resolve().then(() => console.log('2. Microtask 1'));

 setTimeout(() => console.log('3. Timer 1'), 0);

 const fs = require('fs');
 fs.readFile('user-details.txt', () => console.log('4. I/O operation'));
 
 setImmediate(() => console.log('5. Immediate 1'));

 process.on('exit', (code) => {
    console.log('6. Exit event');
 });

console.log('7. End of script');
res.end();
});



const PORT=8000;
server.listen(PORT, () => {
    console.log(`server strted port: http://localhost:${PORT}`);
});