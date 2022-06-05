import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export const rename = async () => {
  const fileToRename = `wrongFilename.txt`;
  const newFileName = `properFilename.md`;
  const pathToFilesFolder = 'files/';
  const fullSourcePath = path.join(__dirname, pathToFilesFolder, fileToRename);
  const fullDestinationPath = path.join(__dirname, pathToFilesFolder, newFileName);

  try {
    const destFiles = await fs.readdir(path.join(__dirname, pathToFilesFolder), {withFileTypes: false});
    if (destFiles.includes(newFileName)) {
      throw new Error('FS operation failed'); // file already exist
    }
    await fs.rename(fullSourcePath, fullDestinationPath);
  }
  catch (err) {
    throw new Error('FS operation failed');
  }

};

