export const parseEnv = () => {
  let parsedVars = [];

  for (let key in process.env) {
    if (key.substring(0,4) === 'RSS_') {
      console.log(`${key} = ${process.env[key]};`);
      parsedVars.push(process.env[key]);
    }
  }
  if (parsedVars.length === 0) {
    console.log(`No 'RSS_' variables found..`);
    return false
  }
  return parsedVars;
};


