const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);

    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welecome</title></head>');
        res.write('<body><h1>Welecome to node js learning</h1></body>')
        res.write('</html>');
        return res.end()
    }
    else if(req.url === "/playlist"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>welcom</title></head>');
        res.write('<body><h1>html , css , js, java, c++ , react js, node js</h1></body>')
        res.write('</html>');
        return res.end()
    }else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title></title></head>');
        res.write('<body><h1>404 not found</h1></body>')
        res.write('</html>');
        return res.end()
    }
    
})



const PORT = 3000;
server.listen(PORT ,() => {
    console.log(`server started http://localhost:${PORT}`)
})


