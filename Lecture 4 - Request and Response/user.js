const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);

    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete coding</title></head>');
        res.write('<body><h1>Enter your Details: </h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placholder="Enter your name"><br>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male">')
        res.write('<label for="male">Female</label>')
        res.write('<input type="radio" id="Female" name="gender" value="female"><br>')
        res.write('<label for="male">Other</label>')
        res.write('<input type="radio" id="Other" name="gender" value="Other"><br>')
        res.write('<input type="submit" value="submit">');
        res.write('</form>') 
        res.write('</body>')
        res.write('</html>');
        return res.end()
    }else if(req.url.toLocaleLowerCase() === '/submit-details' && req.method === "POST"){
        fs.writeFileSync("output.text", "Arfaj sheru");
        res.statusCode = 301;
        res.setHeader('location', '/')
    }
  
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title></title></head>');
    res.write('<body><h1>send details successfully</h1></body>')
    res.write('</html>');
    return res.end()
})



const PORT = 3000;
server.listen(PORT ,() => {
    console.log(`server started http://localhost:${PORT}`)
})


