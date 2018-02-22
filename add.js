// const add = val1 => {
//     return val2 => {
//         return val1 + val2;
//     }
// };

const add = val1 => val2 => val1 + val2;
module.exports = add;
