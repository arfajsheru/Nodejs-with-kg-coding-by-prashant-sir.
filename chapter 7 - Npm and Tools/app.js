const http = require('http');


const server = http.createServer((req,res) => {
    console.log('server started bro');
    res.end()
})

const PORT=8000
server.listen(PORT, () => {
    console.log(`server started prot http://localhost:${PORT}`);
});