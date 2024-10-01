const sumRequestHandler = (req, res) => {    
    console.log("successfully haaaaaaaaaaaaaa", req.url);

    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end', () => {
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);

        const params = new URLSearchParams(fullBody);
        const bodyObject = Object.fromEntries(params);
        console.log(bodyObject);

        const result = Number(bodyObject.First) + Number(bodyObject.Second);
        console.log("The sum is ", result);

        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head>
                <title>Calculation Result</title>
                <style>
                    body {
                        background-color: #f0f4f8;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        font-family: Arial, sans-serif;
                    }
                    .result-container {
                        background-color: #ffffff;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h1 {
                        font-size: 2rem;
                        color: #333333;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 1.2rem;
                        color: #333333;
                        margin-bottom: 20px;
                    }
                    .button {
                        background-color: #4CAF50;
                        color: white;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1rem;
                        font-weight: 700;
                        text-decoration: none;
                    }
                    .button:hover {
                        background-color: #45a049;
                    }
                </style>
            </head>
            <body>
                <div class="result-container">
                    <h1>Calculation Result</h1>
                    <p>The sum of ${bodyObject.First} and ${bodyObject.Second} is: <strong>${result}</strong></p>
                    <a href="/calculator" class="button">Back to Calculator</a>
                </div>
            </body>
            </html>
        `);

        return res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;
