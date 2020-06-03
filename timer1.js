const userInput = process.argv.slice(2);
const c = console.log;


const timer = (userInput) => {
  // console.log(userInput)
  if (userInput.length === 0) {
    // console.log("No input")
    return "No input"
  } else {
    for (let i of userInput) {
      i = Number(i);
      // console.log(Number.isNaN(i))
      // console.log(typeof i)
      if (Number.isNaN(i)) {
        c("We can't schedule anything " + i + " is a not a number")
      } else if (i < 0) {
        c("Cannot schedule anything " + i + " is a negative number")
      } else {
        const time = i * 1000
        const startTime = 0;
        setTimeout(() => {
          process.stdout.write('\x07');
          console.log("it's been ", i, "seconds")
        }, startTime + (time));
      }
    }
  }
}
timer(userInput)
