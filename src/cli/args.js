export const parseArgs = () => {

  let args =  process.argv.slice(2);
  let userArgs = [];

  args.forEach( (item, index, arr) => {
    if (item.startsWith('--')) {
      const argStr = `${item.slice(2)} is ${arr[index + 1]}`;
      userArgs.push(argStr);
    }
  });

  console.log(userArgs.join(','));
  };



// implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it)
// and prints them to the console in the format propName is value, prop2Name is value2

parseArgs();