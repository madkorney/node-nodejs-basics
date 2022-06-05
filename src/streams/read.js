import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import { pipeline } from 'stream';

export const read = async () => {

  const fileName = '/files/fileToRead.txt';
  const filePathName = path.join(__dirname, fileName);
  try {
    const fd = await fs.open(filePathName);
    const readStream = fd.createReadStream();
    pipeline(
      readStream,
      process.stdout,
      error => {
        if (error) {
          console.error(`Error: ${error.message}`);
        }
      }
    );
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
  }
};