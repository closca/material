var args = require('minimist')(process.argv.slice(2));
var VERSION = args.version || require('../package.json').version;

module.exports = {
    banner: '/*!\n' +
    ' * AngularJS Material Design\n' +
    ' * https://github.com/angular/material\n' +
    ' * @license MIT\n' +
    ' * v' + VERSION + '\n' +
    ' */\n',
    jsBaseFiles: [
        'src/core/**/*.js'
    ],
    jsFiles: [
        'src/components/backdrop/*.js',
        'src/components/button/*.js',
        'src/components/card/*.js',
        'src/components/tabs/*.js',
        'src/components/progressCircular/*.js',
        'src/components/progressLinear/*.js',
        'src/components/dialog/*.js',
        'src/components/icon/*.js',
        'src/components/menu/**/*.js',
        'src/components/content/*.js',
        'src/components/sidenav/*.js',
        'src/components/checkbox/*.js',
        'src/components/toast/*.js',
        'src/components/toolbar/*.js',
        'src/core/**/*.js',
        '!src/**/*.spec.js'
    ],
    mockFiles: [
        'test/angular-material-mocks.js'
    ],
    themeBaseFiles: [
        'src/core/style/variables.scss',
        'src/core/style/mixins.scss'
    ],
    scssBaseFiles: [
        'src/core/style/color-palette.scss',
        'src/core/style/variables.scss',
        'src/core/style/mixins.scss',
        'src/core/style/structure.scss',
        'src/core/style/typography.scss',
        'src/core/style/layout.scss',

        // TODO(crisbeto): can be removed once mdPanel is in the core.
        'src/components/panel/*.scss'
    ],
    scssLayoutFiles: [
        'src/core/style/variables.scss',
        'src/core/style/mixins.scss',
        'src/core/style/layout.scss',
        'src/core/services/layout/layout.scss'
    ],
    scssLayoutAttributeFiles: [
        'src/core/style/variables.scss',
        'src/core/style/mixins.scss',
        'src/core/services/layout/layout-attributes.scss'
    ],
    scssPaths: [
        'src/components/backdrop/*.scss',
        'src/components/button/*.scss',
        'src/components/card/*.scss',
        'src/components/tabs/*.scss',
        'src/components/progressCircular/*.scss',
        'src/components/progressLinear/*.scss',
        'src/components/dialog/*.scss',
        'src/components/icon/*.scss',
        'src/components/menu/*.scss',
        'src/components/content/*.scss',
        'src/components/sidenav/*.scss',
        'src/components/checkbox/*.scss',
        'src/components/toast/*.scss',
        'src/components/toolbar/*.scss',
        'src/core/services/**/*.scss'
    ],
    cssIEPaths: ['src/**/ie_fixes.css'],
    paths: 'src/+(components|core)/**',
    outputDir: 'dist/',
    demoFolder: 'demo-partials'
};


