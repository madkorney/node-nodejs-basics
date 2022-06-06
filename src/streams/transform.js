'use strict'

import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import { pipeline, Transform } from 'stream';


export const transform = async () => {

  const fileName = '/files/fileToWrite.txt';
  const filePathName = path.join(__dirname, fileName);

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().slice(0,-1).split('').reverse().join(''));
      },
    });

  try {

    const writeStream = fs.createWriteStream(filePathName, 'utf-8');
    console.log('Please type some text to be nettirw to file. For exit press Ctrl-C.');
    pipeline(
      process.stdin,
      transformStream,
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

(async () => {
  await transform();
})();
