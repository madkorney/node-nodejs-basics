export const parseArgs = () => {
    let propName =  process.argv[3];
    let prop2Name = process.argv[5];
    console.log(`propName is ${propName}, prop2Name is ${prop2Name}`);
};

// implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it)
// and prints them to the console in the format propName is value, prop2Name is value2
