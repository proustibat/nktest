// un article qui permet de bien comprendre ici
// http://extralogical.net/articles/currying-javascript.html

// const hard = function ( f ) {
//
//     const length = f.length;
//     let args  = Array.prototype.slice.call( arguments, 1 );
//     const loop = function() {
//         let largs = args;
//
//         if ( arguments.length > 0 ) {
//             largs = largs.concat( Array.prototype.slice.call( arguments, 0 ) );
//         }
//         return largs.length >= length ? f.apply( this, largs ) : hard.apply( this, [ f ].concat( largs ) );
//     };
//
//     return args.length >= length ? loop() : loop;
// };


// es6 version
const hard = ( f, arr = [], length = f.length ) =>
    ( ...args ) => (
        a => a.length === length ? f( ...a ) : hard( f, a ) )( [ ...arr, ...args ]
    );

module.exports = hard;
