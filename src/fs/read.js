import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export const read = async () => {
  const fileToRead = `fileToRead.txt`;
  const pathToFilesFolder = 'files/';
  const fullSourcePath = path.join(__dirname, pathToFilesFolder, fileToRead);

  try {
    const data = await fs.readFile(fullSourcePath, {encoding: 'utf-8'});
    console.log(data);
  }
  catch (err) {
    throw new Error('FS operation failed');
  }

};

(async () => {
  await read();
})();


