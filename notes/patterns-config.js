var config = {
    patterns: {
        settings: {
            dest: 'demo/documentation/pattern-library',
            //include path to where the templates will live for the pattern library
            template: 'demo/documentation/templates/main.hbs'
        },
        sections: [
            
            {
                title: 'Components',
                files: 'demo/components/*.html'
            },
            // what about 'not' typography?
            {
                title: 'UI Kit',
                files: 'demo/library/styles/global/',
                variables: [
                    {
                        title: 'Colors',
                        files: 'demo/library/styles/global/colors.scss',
                        template: 'color'
                    },
                    {
                        title: 'Typography',
                        files: 'demo/library/styles/global/typography.scss',
                        template: 'typography'
                    }
                ]
            }            
        ]
    }
};

module.exports = config;