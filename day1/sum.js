// function sum(a, b) {
//   console.log(a + b);
// }
/* Since module.exports is object, we can attach the properties to it. 
   This is also a valid export
*/
// module.exports.sum = sum;

// default export
export default function sum(a, b) {
  console.log(a + b);
}
