const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>Calculator Project</title>
                        <style>
                            body {
                                background-color: #f0f4f8;
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                            }
                            .container {
                                background-color: #ffffff;
                                padding: 20px;
                                border-radius: 10px;
                                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                                text-align: center;
                            }
                            h1 {
                                font-size: 2rem;
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
                        <div class="container">
                            <h1>Welcome to Calculator</h1>
                            <a href="/calculator" class="button">Open Calculator App</a>
                        </div>
                    </body>
                    </html>`);
        return res.end();
    } else if (req.url === '/calculator') {
        res.write(`
            <html>
            <head>
                <title>Calculator</title>
                <style>
                    body {
                        background-color: #f0f4f8;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        font-family: Arial, sans-serif;
                    }
                    .calculator-form {
                        background-color: #ffffff;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                    }
                    input {
                        padding: 10px;
                        font-size: 1rem;
                        border: 1px solid #cccccc;
                        border-radius: 5px;
                        width: 200px;
                    }
                    button {
                        background-color: #4CAF50;
                        color: white;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1rem;
                        font-weight: 700;
                    }
                    button:hover {
                        background-color: #45a049;
                    }
                </style>
            </head>
            <body>
                <form action="/calculate-result" method="POST" class="calculator-form">
                    <input type="number" placeholder="First number" name="First" required>
                    <input type="number" placeholder="Second number" name="Second" required>
                    <button type="submit">Calculate Sum</button>
                </form>
            </body>
            </html>
        `);
        return res.end();
    } else if (req.url === '/calculate-result' && req.method === 'POST') {
        return sumRequestHandler(req, res);
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>404 - Page Not Found</title>
            <style>
                body {
                    background-color: #f0f4f8;
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                h1 {
                    font-size: 2rem;
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
            <div class="container">
                <h1>404 - Page Not Found</h1>
                <a href="/" class="button">Go to the Home Page</a>
            </div>
        </body>
        </html>`);

    return res.end();
}

exports.requestHandler = requestHandler;
