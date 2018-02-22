const add = require( './add' );


// const compose = ( ...fns ) => ( ...args ) => {
//     return fns.slice( 0, - 1 ).reduceRight( ( res, fn ) => fn( res ),
//         fns[ fns.length - 1 ].apply( null, args )
//     );
// };

// const compose = ( ...fns ) =>
//     fns.reverse().reduce( ( prevFn, nextFn ) =>
//             value => nextFn( prevFn( value ) ), value => value
//     );


// es6 version
const compose = ( ...fns ) => x => fns.reduceRight( ( acc, fn ) => fn( acc ), x );

module.exports = compose;
