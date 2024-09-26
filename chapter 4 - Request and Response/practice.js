const htttp = require("http");

const server = htttp.createServer((req, res) => {
  if (req.url === "/home") {
    res.write("<h1>Welcome to home page</h1>"); 
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to men category page</h1>"); 
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to women category page</h1>"); 
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to kids category page</h1>"); 
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to cart order page</h1>"); 
    return res.end();
  }


  res.setHeader("Content-Type", "text/html");
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>

    <title>Node js practice</title>
</head>
<body>
    <nav>
        <ul style="list-style: none;">
        <li><a href="home" style="display: flex; text-decoration: none; font-size:xx-large; color: blue;">Home</a></li>
            <li><a href="men" style="display: flex; text-decoration: none; font-size:xx-large; color: blue;">Men</a></li>
            <li><a href="women" style="display: flex; text-decoration: none; font-size:xx-large; color: blue;">women</a></li>
            <li><a href="kids" style="display: flex; text-decoration: none; font-size:xx-large; color: blue;">kids</a></li>
            <li><a href="cart" style="display: flex; text-decoration: none; font-size:xx-large; color: blue;">cart</a></li>
        </ul>
    </nav>
</body>
</html>`);
res.end()
});

const PORT = 9000;

server.listen(PORT, () => {
  console.log(`server started path http://localhost:${PORT}`);
});
