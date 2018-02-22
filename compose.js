const add = require( './add' );

const compose1 = ( ...fns ) =>
    ( ...args ) =>
        fns
            .slice( 0, - 1 )
            .reduceRight(
                ( res, fn ) => fn( res ),
                fns[ fns.length - 1 ].apply( null, args )
            );

const compose2 = ( ...fns ) => fns.reverse().reduce( ( acc, next ) => x => next( acc( x ) ), x => x );

const compose3 = ( ...fns ) => x => fns.reduceRight( ( acc, fn ) => fn( acc ), x );

const runPerfWith = ( composeFunction, testName ) => {
    // Start timing now
    console.time( testName );
    for ( let i = 1; i <= 1e6; i++ ) {
        composeFunction( add( 10 ), add( 20 ) )( 5 );
        composeFunction( add( 10 ), add( 20 ), add( 50 ) )( 5 );
    }
    // ... and stop.
    console.timeEnd( testName );
};

runPerfWith( compose1, 'Composition1' );
runPerfWith( compose2, 'Composition2' );
runPerfWith( compose3, 'Composition3' );

/**
 *
 * Composition1: 759.656ms
 * Composition2: 642.396ms
 * Composition3: 671.396ms
 *
 */

module.exports = compose2;
