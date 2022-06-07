import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const create = async () => {
  const fileName = 'fresh.txt';
  const pathToFilesFolder = 'files/';
  const filePathName = path.join(__dirname, pathToFilesFolder, fileName);
  const fileContent = `I am fresh and young`;

  function closeFile(file) {
    fs.close(file, (err) => {
      if (err) throw err;
    });
  }

  try {
    fs.open(filePathName, 'wx', (err, file) => {
      if (err) {
        throw new Error('FS operation failed');
      }
      try {
        fs.writeFile(file, fileContent, (err) => {if (err) throw err});
        closeFile(file);
      }
      catch (err) {
        closeFile(file);
        throw err;
      }
    });
  }
  catch (err) {
    console.log(err.message);
  }

};

(async () => {
  await create();
})();
