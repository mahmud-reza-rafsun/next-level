const fs = require('fs');

const content1 = "This is a content \n nodejs is awesome";

try {
    fs.writeFileSync("./output/test-sync.txt", content1);
    console.log("file written sync");
} catch (error) {
    console.log(error.message);
}

const content2 = "This no issue to fix a bug in node js";

fs.writeFile("./output/test-async.txt", content2, (error) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log("File written asynchronously");
    }
});