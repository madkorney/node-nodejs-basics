'use strict'

import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import { pipeline } from 'stream';



export const decompress = async () => {
  const pathToFilesFolder = 'files/';
  const sourceFileName = 'archive.gz';
  const destinationFileName = 'fileDecompressed.txt';
  const sourcePathToFile = path.join(__dirname, pathToFilesFolder, sourceFileName);
  const destinationPathToFile = path.join(__dirname, pathToFilesFolder, destinationFileName);

  try {
    const writeStream = fs.createWriteStream(destinationPathToFile, 'utf-8');
    const readDataBuffer = fs.readFile(sourcePathToFile, (err, data) => {
      if (err) {
        console.log('An error occurred:', err.message);
      }
      const buffer = Buffer.from(data, 'base64');
      zlib.unzip(buffer, (err, buffer) => {
        if (err) {
          console.error('An error occurred:', err.message);
          process.exitCode = 1;
        }
        writeStream.write(buffer.toString());
      });

    } );


  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
  };


(async () => {
    await decompress();
  })();