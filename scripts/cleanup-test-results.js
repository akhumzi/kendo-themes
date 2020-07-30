const fs = require("fs");
const path = require("path");
const glob = require("glob");

const tests = glob.sync("./tests/visual/*.html").map(test => path.basename(test, ".html"));
const results = glob.sync("./tests/visual/output/**/*.png");

results.forEach(result => {
    let name = path.basename(result, ".png");

    if (tests.indexOf(name) === -1) {
        fs.unlinkSync(result);
    }
});
