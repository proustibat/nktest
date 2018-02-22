// node curry-lodash.js

const _ = require( 'lodash' );
const hard = require( './hard' );


const addFn1 = ( x, y ) => x + y;
const addFn2 = ( x, y, z ) => x + y + z;
const addFn3 = ( x, y, z, o ) => x + y + z + o;

// vanilla js
const addHard1 = hard( addFn1 );
const addHard2 = hard( addFn2 );
const addHard3 = hard( addFn3 );

// lodash
const curried1 = _.curry( addFn1 );
const curried2 = _.curry( addFn2 );
const curried3 = _.curry( addFn3 );

// results
console.log( `${ addHard1(2)(3) } versus ${ curried1(2)(3) }` ); // 5 versus 5
console.log( `${ addHard2(2)(3)(1) } versus ${ curried2(2)(3)(1) }` ); // 6 versus 6
console.log( `${ addHard3(2)(3)(1)(10) } versus ${ curried3(2)(3)(1)(10) }` ); // 16 versus 16
