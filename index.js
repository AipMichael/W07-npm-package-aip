const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const cleanAll = (directory) => {
  fs.readdir(directory, (error, elements) => {
    console.log(directory, elements);
    if (error) {
      console.log(chalk.cyan("Error reading your files."));
    } else {
      for (const element of elements) {
        console.log(element);
        fs.stat(path.join(directory, element), (error, info) => {
          if (error) {
            console.log(chalk.redBright("Error stating elements."));
          } else if (info.isFile()) {
            console.log(chalk.cyan(`Here is file ${element}`));
            fs.unlink(path.join(directory, element), (error) => {
              error
                ? console.log(chalk.yellow("Error deleting your files."))
                : console.log(chalk.cyan(`We deleted your file ${element}.`));
              process.exit(1);
            });
          } else if (info.isDirectory()) {
            console.log(chalk.cyan(`Here is folder ${element}`));
            fs.rmdir(path.join(directory, element), (error) => {
              error
                ? console.log(chalk.yellow("Error deleting your folder."))
                : console.log(chalk.cyan(`We deleted your folder ${element}.`));
            });
          }

          fs.rmdir(path.resolve(directory), (error) => {
            error
              ? console.log(chalk.yellow("Error deleting your folder."))
              : console.log(chalk.cyan(`We deleted your folder ${element}.`));
          });
        });
      }
    }
  });
};

cleanAll("basura");
