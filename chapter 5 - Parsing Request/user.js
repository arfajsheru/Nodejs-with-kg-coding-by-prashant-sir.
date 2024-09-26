
const fs = require('fs');
const userHandlerReques = (req, res) => {
    console.log(req.url, req.method);


    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete coding</title></head>');
        res.write('<body><h1>Enter your Details: </h1>');
        res.write('<form action="/submit-details" method="POST">'); //path /sumbit-details and methode post
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
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk); // output: <Buffer 75 73 65 72 6e 61 6d 65 3d 41 72 66 61 74 2b 73 68 65 72 75 26 67 65 6e 64 65 72 3d 6d 61 6c 65>
            body.push(chunk);
        })

        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody); //output: username=Arfat+sheru&gender=male
            const params = new URLSearchParams(fullBody); //url searchprams full body ko decode karega 

            // const bodyObject = {}; //crete new object 
            // for(const [key,val] of params.entries()){ // loop ak ak karke key or value deta rahega or vo object me dalta rahega
            //     bodyObject[key] = val
            // }

            // staderd methode

            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject); // output: { username: 'Arfat sheru', gender: 'male' }
            fs.writeFileSync("output.txt", JSON.stringify(bodyObject));
        })
        
        res.statusCode = 301;
        res.setHeader('location', '/')
    }
  
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title></title></head>');
    res.write('<body><h1>send details successfully</h1></body>')
    res.write('</html>');
    return res.end()
};

module.exports = userHandlerReques;





