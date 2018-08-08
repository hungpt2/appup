// ./styleguide.config.js
module.exports = {
    webpackConfig: require('./build/webpack.base.config.js'),
    require: [
        './styleguide/scripts.js',
        './styleguide/styles.css',

        // Bootstrap
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/bootstrap-vue/dist/bootstrap-vue.css',
        
        // Ag-grid
        './node_modules/ag-grid/dist/styles/ag-grid.css',
        './node_modules/ag-grid/dist/styles/ag-theme-balham.css',

        // Code Mirror
        //'./node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
        //'./node_modules/codemirror/mode/javascript/javascript.js',
        //'./node_modules/codemirror/mode/css/css.js',

        './node_modules/codemirror/lib/codemirror.css',
        './node_modules/codemirror/theme/neat.css',

        // FlatPicker
        //'./node_modules/flatpickr/dist/flatpickr.css',

        // Vue multiselect
        './node_modules/vue-multiselect/dist/vue-multiselect.min.css'
    ],
    showUsage: true
};