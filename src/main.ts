import FileHelper from "./helpers/fileHelper";


FileHelper.processLineByLine(undefined, (line) => {
  console.log(`Line from file: ${line}`);
});
