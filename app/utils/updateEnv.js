const fs = require("fs");
const path = require("path");

const envPath = path.resolve(path.join(global.appRoot, ".env"));

function updateEnv(key, value) {
  fs.readFile(envPath, "utf8", (err, data) => {
    if (err) {
      return console.error(err);
    }

    let updated = false;
    const lines = data.split("\n");
    const newLines = lines.map((line) => {
      if (line.startsWith(`${key}=`)) {
        updated = true;
        return `${key}=${value}`;
      }
      return line;
    });
    if (!updated) {
      newLines.push(`${key}=${value}`);
    }

    fs.writeFile(envPath, newLines.join("\n"), "utf8", (err) => {
      if (err) {
        return console.error(err);
      }
      console.log(`.env updated: ${key}=${value}`);
    });
  });
}

module.exports = updateEnv;
