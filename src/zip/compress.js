'use strict'

import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import { pipeline, Transform } from 'stream';



export const compress = async () => {
  const pathToFilesFolder = 'files/';
  const sourceFileName = 'fileToCompress.txt';
  const destinationFileName = 'archive.gz';
  const sourcePathToFile = path.join(__dirname, pathToFilesFolder, sourceFileName);
  const destinationPathToFile = path.join(__dirname, pathToFilesFolder, destinationFileName);

  try {
    const readStream = fs.createReadStream(sourcePathToFile, 'utf-8');
    const writeStream = fs.createWriteStream(destinationPathToFile, 'utf-8');
    const gzip = zlib.createGzip();

    pipeline(
      readStream,
      gzip,
      writeStream,
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


(async () => {
    await compress();
  })();