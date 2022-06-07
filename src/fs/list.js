import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export const list = async () => {
  const pathToFilesFolder = 'files/';
  const fullSourcePath = path.join(__dirname, pathToFilesFolder);

  try {
    const dirContent = await fs.readdir(fullSourcePath, {withFileTypes: true});
    for (let item of dirContent) {
      if (item.isFile()) {
        console.log(item.name);
      }
    }
  }
  catch (err) {
    throw new Error('FS operation failed');
  }

};


(async () => {
  await list();
})();
