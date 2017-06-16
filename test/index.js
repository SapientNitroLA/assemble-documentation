'use strict';

var assert = require( 'chai' ).assert;
var fs = require( 'fs-extra' );

var sugarcoat = require( '../lib/index' );

suite( 'Index: Glob files', function () {

    test( 'Sugarcoat globs our file paths correctly.', function () {

        var globFilesConfig = {
            dest: './test/sugarcoat',
            sections: [
                {
                    title: 'CSS Files',
                    files: [
                        './test/assert/*.css',
                        '!./test/assert/parseComment.css'
                    ]
                }
            ]
        };

        sugarcoat( globFilesConfig )
        .then( data => {

            var fileData = data.sections[ 0 ].files;

            assert.lengthOf( fileData, 5, 'There are 5 files that glob found.' );
            assert.propertyVal( fileData[ 3 ], 'path', './test/assert/prefixAssets.css', 'The fourth item in the array is the correct file.' );

        }, data => {

            assert.isString( data, 'error is not a string' );
        });
    });

    teardown( done => {

        fs.remove( './test/sugarcoat', err => {

            if ( err ) return console.error( err );

            done();
        });
    });
});

suite( 'Index: Read Sections', function () {

    test( 'Sugarcoat is converting our section file string into an object with the correct data.', function () {

        var readSectionsConfig = {
            dest: './test/sugarcoat',
            sections: [
                {
                    title: 'Colors File',
                    files: './test/assert/readSections.css'
                }
            ]
        };

        var sectionFilePath = './test/assert/readSections.css'
            , sectionFileExt = 'css'
            , sectionFileSrc = '/**\n *\n * @title Primary Colors\n * @description Client-branded color palette\n * @usage Found only in brand-specific UI elements\n *\n */\n:root {\n    --brand-red: #703030; /* Headlines */\n    --brand-grey: #2F343B; /* Links */\n    --accent-red: #C77966;\n    --accent-grey: #7E827A;\n}'
            ;

        sugarcoat( readSectionsConfig )
        .then( data => {

            // var fileData = data.sections[ 0 ].files[ 0 ];

            // assert.isObject( fileData, 'The data in the files array is an object.' );
            // assert.propertyVal( fileData, 'path', sectionFilePath, 'The sections file path is correct.' );
            // assert.propertyVal( fileData, 'ext', sectionFileExt, 'The sections file ext is correct.' );
            // assert.propertyVal( fileData, 'src', sectionFileSrc, 'The sections file src is correct.' );
            console.log('pass');

        }, data => {

            // assert.isString( data, 'error is not a string' );
            console.log('fail');
        });
    });

    teardown( done => {

        fs.remove( './test/sugarcoat', err => {

            if ( err ) return console.error( err );

            done();
        });
    });
});
