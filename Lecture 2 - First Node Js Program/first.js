console.log("kg coding is the best coding channel")



const fs = require("fs");


fs.writeFile('ouput.text', "writting file", (err) => {
    if(err) console.log("Error occured")
    else console.log("file written successfully");
});
