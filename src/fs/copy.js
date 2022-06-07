import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));



export const copy = async () => {
  const sourceDirPath = 'files/';
  const destinationDirPath = 'files-copy/';
  const fullSourcePath = path.join(__dirname, sourceDirPath);
  const fullDestinationPath = path.join(__dirname, destinationDirPath);

  try {
    await fs.cp(fullSourcePath, fullDestinationPath, {errorOnExist: true, force: false, recursive: true});
  }
  catch (err) {
    throw new Error('FS operation failed');
  }

}

(async () => {
  await copy();
})();




