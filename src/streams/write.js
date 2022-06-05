'use strict'

import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import { pipeline } from 'stream';


export const write = async () => {

  const fileName = '/files/fileToWrite.txt';
  const filePathName = path.join(__dirname, fileName);

  try {

    const writeStream = fs.createWriteStream(filePathName, 'utf-8');
    console.log('Please type some text to be written to file. For exit press Ctrl-C.');
    pipeline(
      process.stdin,
      writeStream,
      (err) => {
        if (err) {
          console.error('Pipeline failed.', err);
        } else {
          console.log('Pipeline succeeded.');
        }
      }
    );

  }
  catch (err) {
    console.error(`Error: ${err.message}`);
  }

};
