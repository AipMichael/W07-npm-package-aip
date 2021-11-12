const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const directory = ".";

fs.readdir(directory, (error, files) => {
  if (error) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), (err) => {
      if (error) throw error;
    });
  }
});

console.log(chalk.magenta(`Hi, I am hungry and want some sushi.`));
