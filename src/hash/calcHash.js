import fs from 'fs/promises';
import path from 'path';
const { createHash } = await import('crypto');
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export const calculateHash = async () => {

  const filePath = 'files/fileToCalculateHashFor.txt';
  const fullPathToFile = path.join(__dirname, filePath);

  let hash = createHash('sha256');
  try {
    let fileToEncode = await fs.readFile(
      fullPathToFile,
      {encoding: 'utf-8'}
    );
    hash.update(fileToEncode);
  } catch (err) {
    console.error(err.message);
  }

  const hashHex = hash.digest('hex');
  return hashHex;
};

(async () => {
  await calculateHash();
})();
