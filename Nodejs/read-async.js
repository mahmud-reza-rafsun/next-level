const fs = require('fs');

fs.readFile("./data/ss.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("error happend :", error.message);
    }
    console.log("file content: ");
    console.log(data);
})


console.log("This runs emmediatly -  no blocking");