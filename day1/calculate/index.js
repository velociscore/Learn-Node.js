/* Grouping the modules */
// const { sum } = require("./sum");
// const { mul } = require("./multiply");
// module.exports = { sum, mul };

/* Grouping the modules through using Es module */

// We do need to specify the extension using es module (.js)
import { sum } from "./sum.js";
import { mul } from "./multiply.js";

export { sum, mul };
