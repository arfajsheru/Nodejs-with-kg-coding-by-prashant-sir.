const http = require('http');
const testignSyntax = require('./syntax');
const runtimeError = require('./runtime');
const logicalErorr = require('./logical');
const allTypesOfError = require('./pratice/sy-lo-ru');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);
    // testignSyntax();
    // runtimeError();
    // logicalErorr();
    allTypesOfError();
    res.end()
})

const PORT=8000
server.listen(PORT, () => {
    console.log(`server started port http://localhost:${PORT}`);
});