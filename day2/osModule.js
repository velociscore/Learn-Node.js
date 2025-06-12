// Os module
/**There are several other mehods on os modules explore by yourself.*/

const os = require("os");

console.log(os.platform());

if (os.platform() === "darwin") {
  console.log("i am in darwin");
}

console.log(os.cpus());
os.freemem();
console.log(os.freemem());
