const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const cleanFiles = (directory) => {
  fs.readdir(directory, (error, files) => {
    if (error) {
      console.log(chalk.cyan("Error reading your files."));
      throw err;
    } else {
      for (const file of files) {
        fs.unlink(path.join(directory, file), (error) => {
          if (error) {
            console.log(chalk.yellow("Error deleting your files."));
            throw error;
          }
          console.log(chalk.cyan(`We deleted your file.`));
        });
      }
    }
  });
};

cleanFiles("./basura");
