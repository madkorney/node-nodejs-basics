import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export const remove = async () => {
  const fileToRemove = `fileToRemove.txt`;
  const pathToFilesFolder = 'files/';
  const fullSourcePath = path.join(__dirname, pathToFilesFolder, fileToRemove);

  try {
    await fs.unlink(fullSourcePath);
  }
  catch (err) {
    throw new Error('FS operation failed');
  }

};
