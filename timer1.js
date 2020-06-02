const userInput = process.argv.slice(2);
const c = console.log;


const timer = (userInput) => {
  for (let i of userInput) {
    const time = i*1000
    const startTime = 0; 
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("it's been ", time, "seconds")
    }, startTime + (time));
  }
}


c(timer(userInput))
